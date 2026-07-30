import mongoose from 'mongoose';

// One document per item in a list resource (features, achievements,
// services, portfolio, testimonials, blog, projects, serviceDetails).
// `key` is the resource name from the URL, `itemId` is the id the dashboard
// already generates/uses (e.g. "feat_1"). `data` holds every other field —
// schemaless for the same reason as Singleton: these item shapes are rich,
// varied per resource, and defined by the frontend forms, not a fixed DB schema.
const listItemSchema = new mongoose.Schema({
  key: { type: String, required: true },
  itemId: { type: String, required: true },
  data: { type: mongoose.Schema.Types.Mixed, default: {} }
}, { timestamps: true });

listItemSchema.index({ key: 1, itemId: 1 }, { unique: true });

export default mongoose.model('ListItem', listItemSchema);
