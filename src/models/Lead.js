import mongoose from 'mongoose';

// One document per contact-form / "Let's Connect" modal submission from the
// public website. Both forms on the site (ConnectModal, ContactUs) post here
// directly (no auth) so visitors can actually reach the business — reading
// and managing them is admin-only, from the dashboard's Leads page.
const leadSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  company: { type: String, default: '' },
  message: { type: String, default: '' },
  services: { type: [String], default: [] },
  budget: { type: String, default: '' },
  source: { type: String, default: 'website' }, // e.g. "connect-modal" | "contact-page"
  status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
}, { timestamps: true });

export default mongoose.model('Lead', leadSchema);
