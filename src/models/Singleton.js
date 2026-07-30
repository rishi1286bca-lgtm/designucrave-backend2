import mongoose from 'mongoose';

// One document per singleton resource (hero, about, website, seo, theme,
// aboutPage, servicePage). `key` is the resource name used in the URL;
// `data` holds the full object exactly as the dashboard forms send it —
// deliberately schemaless since these shapes (theme colors/typography,
// aboutPage's stats/coreValues/processSteps/team arrays, etc.) are nested
// and evolve from the frontend, not the database.
const singletonSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  data: { type: mongoose.Schema.Types.Mixed, default: {} }
}, { timestamps: true });

export default mongoose.model('Singleton', singletonSchema);
