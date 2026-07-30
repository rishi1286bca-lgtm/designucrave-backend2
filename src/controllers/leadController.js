import Lead from '../models/Lead.js';

// POST /api/leads — public, called directly from the live website's contact
// form and "Let's Connect" modal. No auth: this is how visitors reach you.
export const createLead = async (req, res, next) => {
  try {
    const { name, email, phone, company, message, services, budget, source } = req.body;
    const lead = await Lead.create({ name, email, phone, company, message, services, budget, source });
    res.status(201).json(lead);
  } catch (err) {
    next(err);
  }
};

// GET /api/leads — admin only (dashboard Leads page).
export const getLeads = async (req, res, next) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    next(err);
  }
};

// PUT /api/leads/:id — admin only, used to change status (new/contacted/closed).
export const updateLead = async (req, res, next) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/leads/:id — admin only.
export const deleteLead = async (req, res, next) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    next(err);
  }
};
