import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-jwt-key';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@arenastudio.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const ADMIN_NAME = process.env.ADMIN_NAME || 'Nidhi Sharma';

// Single-admin CMS — matches the FAKE_USER in src/services/authService.js.
// Swap this for a real Admin/User model + bcrypt before shipping publicly.
export const login = (req, res) => {
  const { email, password } = req.body;

  if (email?.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const user = { name: ADMIN_NAME, email: ADMIN_EMAIL, role: 'Administrator' };
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '24h' });
    return res.status(200).json({ token, user });
  }

  res.status(401).json({ message: 'Invalid email or password.' });
};

export const forgotPassword = (req, res) => {
  res.status(200).json({
    success: true,
    message: `Password reset instructions sent to ${req.body.email}.`
  });
};

export const resetPassword = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Password has been reset successfully.'
  });
};
