// Populates the database with the dashboard's own default/demo content
// (copied verbatim from src/services/mockData.js), so every CMS page shows
// real starter content instead of being blank on first run.
// Run with: npm run seed

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import Singleton from '../models/Singleton.js';
import ListItem from '../models/ListItem.js';
import {
  defaultTheme,
  defaultWebsite,
  defaultSeo,
  defaultHero,
  defaultAbout,
  defaultFeatures,
  defaultAchievements,
  defaultServices,
  defaultPortfolio,
  defaultTestimonials,
  defaultBlog,
  defaultAboutPage,
  defaultServicePage,
  defaultProjects,
  defaultServiceDetails,
  defaultFeaturesSection,
  defaultAchievementsSection,
  defaultTestimonialsSection,
  defaultPortfolioSection,
  defaultBlogSection,
  defaultReviewSection
} from './mockData.js';

dotenv.config();

const SINGLETONS = {
  theme: defaultTheme,
  website: defaultWebsite,
  seo: defaultSeo,
  hero: defaultHero,
  about: defaultAbout,
  aboutPage: defaultAboutPage,
  servicePage: defaultServicePage,
  featuresSection: defaultFeaturesSection,
  achievementsSection: defaultAchievementsSection,
  testimonialsSection: defaultTestimonialsSection,
  portfolioSection: defaultPortfolioSection,
  blogSection: defaultBlogSection,
  reviewSection: defaultReviewSection
};

const LISTS = {
  features: defaultFeatures,
  achievements: defaultAchievements,
  services: defaultServices,
  portfolio: defaultPortfolio,
  testimonials: defaultTestimonials,
  blog: defaultBlog,
  projects: defaultProjects,
  serviceDetails: defaultServiceDetails
};

const seed = async () => {
  await connectDB();

  await Singleton.deleteMany({});
  await ListItem.deleteMany({});

  await Promise.all(
    Object.entries(SINGLETONS).map(([key, data]) => Singleton.create({ key, data }))
  );

  for (const [key, items] of Object.entries(LISTS)) {
    const docs = items.map((item) => {
      const { id, ...data } = item;
      return { key, itemId: id, data };
    });
    if (docs.length) await ListItem.insertMany(docs);
  }

  console.log('Seed complete.');
  await mongoose.connection.close();
  process.exit(0);
};

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
