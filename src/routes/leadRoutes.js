import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createLead, getLeads, updateLead, deleteLead } from '../controllers/leadController.js';

const router = express.Router();

// Public: the live website posts new leads here directly.
router.post('/', createLead);

// Admin only: dashboard reads/manages leads.
router.get('/', protect, getLeads);
router.put('/:id', protect, updateLead);
router.delete('/:id', protect, deleteLead);

export default router;
