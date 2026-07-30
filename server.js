import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import path from 'path';

import { connectDB } from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';
import resourceRoutes from './src/routes/resourceRoutes.js';
import leadRoutes from './src/routes/leadRoutes.js';
import uploadRoutes from './src/routes/uploadRoutes.js';
import { notFound, errorHandler } from './src/middleware/errorMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Support one or more comma-separated origins in FRONTEND_URL.
// If unset, all origins are allowed (handy for local dev).
const allowedOrigins = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);

app.use(helmet({ crossOriginResourcePolicy: false })); // allow serving /uploads cross-origin
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));
app.use(compression());
app.use(morgan('dev'));

app.use(express.json({ limit: '10mb' })); // generous limit: some fields (e.g. base64 preview images) can be large
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Uploaded images are served statically from here.
app.use('/uploads', express.static(path.resolve('src/uploads')));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: { message: 'Too many requests from this IP, please try again later.' }
});
app.use('/api', apiLimiter);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
// Contact form / "Let's Connect" submissions from the public website.
// Mounted before resourceRoutes' generic /api/:resource catch-all so its
// own POST (public) and GET/PUT/DELETE (admin) rules apply, not the
// generic ones (which require auth on every write, including create).
app.use('/api/leads', leadRoutes);

// Generic resource routes handle every content module the dashboard uses:
// hero, about, website, seo, theme, aboutPage, servicePage (singletons) and
// features, achievements, services, portfolio, testimonials, blog, projects,
// serviceDetails (lists). Must be mounted last among /api routes since it
// matches any /api/:resource path.
app.use('/api', resourceRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Arena CMS backend running on port ${PORT}`);
});
