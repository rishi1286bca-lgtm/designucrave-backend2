import Singleton from '../models/Singleton.js';
import ListItem from '../models/ListItem.js';
import { isSingletonKey, isKnownKey } from '../config/resourceRegistry.js';
import { generateId } from '../utils/id.js';
import { RESOURCE_SEED_DATA } from '../seed/resourceSeedData.js';

// Every handler here mirrors one method of resourceServiceFactory.js so the
// frontend's services/index.js can be pointed at these routes with just:
//   getAll: () => axiosInstance.get(`/${resourceKey}`).then(r => r.data)
// — no other component code changes.

const toItem = (doc) => ({ id: doc.itemId, ...doc.data });

// GET /api/:resource
export const getResource = async (req, res, next) => {
  try {
    const { resource } = req.params;
    if (!isKnownKey(resource)) {
      return res.status(404).json({ message: `Unknown resource '${resource}'.` });
    }

    if (isSingletonKey(resource)) {
      const doc = await Singleton.findOne({ key: resource });
      // A resource added to the schema after the DB was last seeded (e.g.
      // reviewSection) has no row yet — fall back to its seed default
      // instead of null, so admin editors don't get stuck on their
      // "Loading..." spinner forever waiting for a form that never arrives.
      if (doc) return res.status(200).json(doc.data);
      return res.status(200).json(RESOURCE_SEED_DATA[resource] ?? null);
    }

    const docs = await ListItem.find({ key: resource }).sort({ 'data.order': 1, createdAt: 1 });
    res.status(200).json(docs.map(toItem));
  } catch (error) {
    next(error);
  }
};

// GET /api/:resource/:id  (list resources only)
export const getResourceItem = async (req, res, next) => {
  try {
    const { resource, id } = req.params;
    const doc = await ListItem.findOne({ key: resource, itemId: id });
    res.status(200).json(doc ? toItem(doc) : null);
  } catch (error) {
    next(error);
  }
};

// POST /api/:resource  (list resources only — create a new item)
export const createResourceItem = async (req, res, next) => {
  try {
    const { resource } = req.params;
    const count = await ListItem.countDocuments({ key: resource });
    const payload = { ...req.body };
    delete payload.id;
    if (payload.order === undefined) payload.order = count;

    const newId = generateId(resource);
    const doc = await ListItem.create({ key: resource, itemId: newId, data: payload });
    res.status(201).json(toItem(doc));
  } catch (error) {
    next(error);
  }
};

// PUT /api/:resource  (singleton resources only — partial update, merged)
export const updateSingletonResource = async (req, res, next) => {
  try {
    const { resource } = req.params;
    const existing = await Singleton.findOne({ key: resource });
    const merged = { ...(existing ? existing.data : {}), ...req.body };

    const doc = await Singleton.findOneAndUpdate(
      { key: resource },
      { $set: { data: merged } },
      { new: true, upsert: true }
    );
    res.status(200).json(doc.data);
  } catch (error) {
    next(error);
  }
};

// PUT /api/:resource/:id  (list resources only — partial update, merged)
export const updateResourceItem = async (req, res, next) => {
  try {
    const { resource, id } = req.params;
    const existing = await ListItem.findOne({ key: resource, itemId: id });
    if (!existing) {
      return res.status(404).json({ message: `Item '${id}' not found in '${resource}'.` });
    }

    const payload = { ...req.body };
    delete payload.id;
    const merged = { ...existing.data, ...payload };

    const doc = await ListItem.findOneAndUpdate(
      { key: resource, itemId: id },
      { $set: { data: merged } },
      { new: true }
    );
    res.status(200).json(toItem(doc));
  } catch (error) {
    next(error);
  }
};

// DELETE /api/:resource/:id  (list resources only)
export const deleteResourceItem = async (req, res, next) => {
  try {
    const { resource, id } = req.params;
    await ListItem.findOneAndDelete({ key: resource, itemId: id });
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

// PATCH /api/:resource/reorder  (list resources only)  body: [id1, id2, id3, ...]
export const reorderResource = async (req, res, next) => {
  try {
    const { resource } = req.params;
    const orderedIds = req.body;

    if (!Array.isArray(orderedIds)) {
      return res.status(400).json({ message: 'Request body must be an array of ids.' });
    }

    const bulkOps = orderedIds.map((id, index) => ({
      updateOne: {
        filter: { key: resource, itemId: id },
        update: { $set: { 'data.order': index } }
      }
    }));
    if (bulkOps.length) await ListItem.bulkWrite(bulkOps);

    const docs = await ListItem.find({ key: resource }).sort({ 'data.order': 1, createdAt: 1 });
    res.status(200).json(docs.map(toItem));
  } catch (error) {
    next(error);
  }
};

// POST /api/:resource/reset  (singleton resources only — restore seed defaults)
export const resetSingletonResource = async (req, res, next) => {
  try {
    const { resource } = req.params;
    const seedValue = RESOURCE_SEED_DATA[resource] ?? {};

    const doc = await Singleton.findOneAndUpdate(
      { key: resource },
      { $set: { data: seedValue } },
      { new: true, upsert: true }
    );
    res.status(200).json(doc.data);
  } catch (error) {
    next(error);
  }
};
