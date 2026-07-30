import {
  defaultTheme,
  defaultWebsite,
  defaultSeo,
  defaultHero,
  defaultAbout,
  defaultAboutPage,
  defaultServicePage,
  defaultFeaturesSection,
  defaultAchievementsSection,
  defaultTestimonialsSection,
  defaultPortfolioSection,
  defaultBlogSection,
  defaultReviewSection
} from './mockData.js';

// Used by POST /api/:resource/reset — only singleton resources support reset
// (matches createSingletonResourceService; list resources have no .reset()).
export const RESOURCE_SEED_DATA = {
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
