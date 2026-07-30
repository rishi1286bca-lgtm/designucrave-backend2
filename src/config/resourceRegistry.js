// Mirrors src/services/index.js exactly. Every resource the dashboard
// calls must be listed here as either a singleton or a list resource.
export const SINGLETON_KEYS = new Set([
  'hero',
  'about',
  'website',
  'seo',
  'theme',
  'aboutPage',
  'servicePage',
  'featuresSection',
  'achievementsSection',
  'testimonialsSection',
  'portfolioSection',
  'blogSection',
  'reviewSection',
]);

export const LIST_KEYS = new Set([
  'features',
  'achievements',
  'services',
  'portfolio',
  'testimonials',
  'blog',
  'projects',
  'serviceDetails'
]);

export const isSingletonKey = (key) => SINGLETON_KEYS.has(key);
export const isListKey = (key) => LIST_KEYS.has(key);
export const isKnownKey = (key) => isSingletonKey(key) || isListKey(key);
