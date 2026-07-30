import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getResource,
  getResourceItem,
  createResourceItem,
  updateSingletonResource,
  updateResourceItem,
  deleteResourceItem,
  reorderResource,
  resetSingletonResource
} from '../controllers/resourceController.js';

const router = express.Router();

// Public reads — the future public website can use these too.
router.get('/:resource', getResource);
router.get('/:resource/:id', getResourceItem);

// Admin-only writes — everything the dashboard does.
router.post('/:resource', protect, createResourceItem);
router.put('/:resource', protect, updateSingletonResource);
router.put('/:resource/:id', protect, updateResourceItem);
router.delete('/:resource/:id', protect, deleteResourceItem);
router.patch('/:resource/reorder', protect, reorderResource);
router.post('/:resource/reset', protect, resetSingletonResource);

export default router;
