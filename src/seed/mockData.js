// ---------------------------------------------------------------------------
// Initial mock/seed data for the dashboard.
// ---------------------------------------------------------------------------

export const defaultTheme = {
  colors: {
    // Real brand palette — a green accent on a dark-olive/white base,
    // matching the live designucrave.com site (not the generic indigo/
    // purple SaaS scheme this used to ship with).
    primary: "#81d742",
    secondary: "#577257",
    accent: "#009b77",
    background: "#ffffff",
    surface: "#f8fafc",
    sectionBg: "#f1f5f9",
    cardBg: "#ffffff",
    heading: "#1a1a1a",
    paragraph: "#4a4a4a",
    border: "#e4e4e7",
    shadow: "#1a1a1a",
    button: "#81d742",
    buttonHover: "#009b77",
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    svcBg: "#f8fafc",
    svcCard: "#ffffff",
    svcOlive: "#577257",
    svcText: "#000000",
    svcMuted: "#64748b",
    svcBorder: "#e2e8f0",
  },
  typography: {
    headingFont: "Poppins, sans-serif",
    bodyFont: "Inter, sans-serif",
    fontWeight: "600",
    baseFontSize: "16",
    lineHeight: "1.6",
    letterSpacing: "0",
  },
  button: {
    bg: "#81d742",
    hover: "#009b77",
    text: "#ffffff",
    radius: "4",
    shadow: "0 10px 25px -8px rgba(87,114,87,0.55)",
    paddingX: "36",
    paddingY: "16",
  },
};

export const defaultWebsite = {
  logo: "https://www.designucrave.in/wp-content/uploads/2021/07/Design-U-Crave-Technologies-green.png",
  logoLight: "https://www.designucravetechnologies.com/wp-content/uploads/2021/07/Design-U-Crave-Technologieshome.png",
  favicon: "",
  footerLogo: "https://www.designucravetechnologies.com/wp-content/uploads/2021/07/Design-U-Crave-Technologieshome.png",
  phone: "+91 96770 59655",
  email: "hello@designucrave.com",
  address: "Oahfeo Workspaces, 1095P, Sector 46, Gurugram 122018",
  mapEmbed: "https://maps.google.com/maps?q=Sector%2046,%20Gurugram,%20122018&output=embed",
  // Real handles aren't wired up in the live site yet (it falls back to "#"
  // for every icon) — left blank rather than pointing to fake generic
  // facebook.com/twitter.com placeholder URLs.
  social: {
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    pinterest: "",
  },
};

export const defaultSeo = {
  metaTitle: "Design U Crave — Designs That Speak, Strategies That Perform",
  metaDescription:
    "From UI/UX to digital marketing, we blend creativity with strategy to elevate your brand's online presence.",
  keywords: "web design, brand identity, UI/UX design, digital marketing, Gurugram design agency",
  ogImage: "",
  canonicalUrl: "https://designucrave.com",
};

export const defaultHero = {
  heading: "Designs That Speak<br/>Strategies That Perform",
  subheading: "From UI/UX to digital marketing, we blend creativity with strategy to elevate your brand's online presence.",
  description:
    "We are a leading technology company specializing in innovative design solutions. Our team of experts is dedicated to creating cutting-edge products and services that meet the needs of our clients. With a focus on creativity and functionality, we strive to deliver exceptional results that exceed expectations.",
  ctaText: "Get A Started",
  ctaLink: "#about",
  bgImage: "https://www.designucrave.in/wp-content/uploads/2021/07/h3-slider-man.png",
  overlay: "#577257",
  opacity: "10",
  height: "large",
  alignment: "left",
  textAlign: "left",
  headingColor: "#ffffff",
  descriptionColor: "#ffffff",
  sectionBg: "#577257",
  visible: true,
};

export const defaultAbout = {
  eyebrow: "Who We are",
  heading: "Design with Purpose, Strategy with Impact",
  description:
    "We are a creative digital agency focused on designing modern, meaningful experiences. By blending strategy and design, we help brands grow, connect, and stay relevant in the digital space.",
  image1: "https://www.designucravetechnologies.com/wp-content/uploads/2025/07/design-with-purpose-design-u-crave.jpg",
  image2: "https://www.designucravetechnologies.com/wp-content/uploads/elementor/thumbs/1000184009-Pica-e1754448846673-rayjsz0hs4b5r1m1qsw39c6ncxi8472xax842djgl4.png",
  buttonText: "Explore More",
  points: [
    { title: "User-Centric<br/>Thinking", icon: "user", theme: "green" },
    { title: "Strategic<br/>Creativity", icon: "strategy", theme: "orange" },
    { title: "End-to-End<br/>Delivery", icon: "delivery", theme: "blue" },
    { title: "Result-Driven<br/>Approach", icon: "result", theme: "purple" },
  ],
  visible: true,
};

// ---------------------------------------------------------------------------
// Section-heading singletons for the repeatable homepage sections below.
// The public website renders these sections as one combined block (eyebrow +
// heading + description + the list of cards), but the list resources
// (features, achievements, testimonials, portfolio, blog) only ever held the
// cards themselves — there was nowhere for the admin to edit the heading
// text. These singletons close that gap; each pairs 1:1 with a list key.
// ---------------------------------------------------------------------------
export const defaultReviewSection = {
  eyebrow: "Annual Progression Review",
  heading: "Our Startup Journey is Just Getting Started!",
  description: "We are in the early stages of building something meaningful. Driven by passion, guided by design, and committed to delivering real value. Every project adds to our momentum and shapes our future.",
  image: "https://www.designucravetechnologies.com/wp-content/uploads/2021/07/h3-banner3.jpg",
  stats: [
    { label: "Digital Marketing", percent: 90, theme: "blue" },
    { label: "Web Development", percent: 80, theme: "green" },
    { label: "Business Consulting", percent: 70, theme: "pink" },
  ],
};

export const defaultFeaturesSection = {
  eyebrow: "Feature",
  heading: "Helping You Reach What <br/> Matters Most",
  description: "We aim to help businesses reach their goals with purpose and precision. At <br/> Design U Crave, we believe in the three C's of success:",
};

export const defaultFeatures = [
  // No iconColor/cardBg/borderColor/hoverColor here on purpose — the live
  // site's Feature.jsx only applies its original pink/green/blue gradient
  // icon treatment when those fields are absent, and only recognizes the
  // "clarity"/"consistency"/"creativity" keywords for that same fallback.
  { id: "feat_1", icon: "clarity", title: "Clarity", description: "We start with a deep understanding of your brand, your users, and your goals. This ensures every solution is purposeful, focused, and aligned.", order: 0 },
  { id: "feat_2", icon: "consistency", title: "Consistency", description: "From design systems to brand voice, we maintain uniformity across every touchpoint to build trust and recognition.", order: 1 },
  { id: "feat_3", icon: "creativity", title: "Creativity", description: "Our ideas are driven by innovation and originality—ensuring your brand not only looks good but delivers meaningful engagement.", order: 2 },
];

export const defaultAchievementsSection = {
  eyebrow: "Achievement",
  heading: "We have more than 13+ years of experience",
  description: "With over 13 years in the digital space, we've designed and developed impactful solutions for diverse industries. Our experience translates into deep expertise, reliable execution, and results that help brands thrive online.",
};

export const defaultAchievements = [
  // theme (coral/blue/purple) is assigned by position on the live site, not
  // stored here — and "ppt"/"happy"/"server" are the legacy icon keywords
  // Achivement.jsx maps to its own icon set.
  { id: "ach_1", number: "51+", label: "Projects completed", icon: "ppt", order: 0 },
  { id: "ach_2", number: "33+", label: "Happy Clients", icon: "happy", order: 1 },
  { id: "ach_3", number: "10+", label: "Industries Served", icon: "server", order: 2 },
];

export const defaultServices = [
  { id: "srv_1", slug: "brand-identity", title: "Brand Identity", description: "We design complete brand systems - logo, typography, color, and brand guidelines - so every touchpoint feels consistent and recognizable.", tags: ["Logo Design", "Typography", "Brand Guidelines"], featured: false, badge: "", badgeType: "", category: "design", icon: "PenTool", visible: true, order: 0 },
  { id: "srv_2", slug: "ui-ux-design", title: "UI/UX Design", description: "Wireframes and prototypes designed around how people actually use a product - guided by current UX trends, not just what looks good in a mockup.", tags: ["Wireframing", "Prototyping", "User Research"], featured: false, badge: "", badgeType: "", category: "design", icon: "Monitor", visible: true, order: 1 },
  { id: "srv_3", slug: "development", title: "Development (Web & E-Commerce)", description: "Custom websites and online stores built on Shopify and WooCommerce, with WhatsApp catalog sync and CRM integration so every visitor becomes a lead you can follow up on automatically.", tags: ["Shopify & WooCommerce", "WhatsApp Integration", "CRM Integration"], featured: true, badge: "", badgeType: "", category: "dev", icon: "ShoppingBag", visible: true, order: 2 },
  { id: "srv_4", slug: "seo-ai-content", title: "SEO & AI Content", description: "AI-assisted keyword research, technical SEO audits, and a content strategy built to rank on Google - and increasingly, on AI search like ChatGPT and Gemini.", tags: ["Technical SEO", "On-Page SEO", "Link Building"], featured: false, badge: "AI-Powered", badgeType: "ai", category: "marketing", icon: "Search", visible: true, order: 3 },
  { id: "srv_5", slug: "performance-marketing", title: "Performance Marketing", description: "Google Ads, Meta Ads, LinkedIn Ads, and programmatic campaigns - managed and optimized to generate real leads and measurable ROI.", tags: ["Google Ads", "Meta Ads", "Remarketing"], featured: false, badge: "", badgeType: "", category: "marketing", icon: "TrendingUp", visible: true, order: 4 },
  { id: "srv_6", slug: "social-media-management", title: "Social Media Management", description: "We plan, create, and manage your social channels end-to-end - consistent posting, engagement, and a content calendar that keeps your brand visible.", tags: ["Content Calendar", "Community Management", "Platform Strategy"], featured: false, badge: "", badgeType: "", category: "marketing", icon: "MessageSquare", visible: true, order: 5 },
  { id: "srv_7", slug: "ai-solutions", title: "AI Solutions", description: "Chatbots, WhatsApp automation, and AI-powered workflows that handle inquiries, recommend products, and turn conversations into orders - around the clock.", tags: ["AI Chatbots", "WhatsApp Automation", "Workflow Automation"], featured: false, badge: "AI-Powered", badgeType: "ai", category: "ai", icon: "Cpu", visible: true, order: 6 },
  { id: "srv_8", slug: "photography", title: "Photography", description: "Professional photography for your products, events, and biggest moments — fully edited, delivered on time, shot to sell and shot to remember.", tags: ["Product Photography", "Event Photography", "Wedding Photography"], featured: false, badge: "", badgeType: "", category: "design", icon: "Camera", visible: true, order: 7 },
];

export const defaultPortfolioSection = {
  eyebrow: "Portfolio",
  heading: "We Have Leadership Strong Experience In Business",
  description: "At Design U Crave, our results speak for themselves. We have created impactful digital solutions across branding, UI/UX, web, content, and SEO with a strong focus on design quality and user experience. Explore some of our key successes.",
  buttonText: "See All Projects",
};

export const defaultPortfolio = [
  { id: "prj_1", title: "HEAD 2 HIRE", category: "Business", description: "A corporate website for a recruitment agency.", demoLink: "#", githubLink: "#", coverImage: "https://www.designucrave.in/wp-content/uploads/2021/07/Screenshot-2025-08-12-at-8.13.39-PM.png", featured: true, tags: ["Corporate", "Web Design"], primaryColor: "#577257", order: 0 },
  { id: "prj_2", title: "Almost Gods", category: "E-commerce", description: "Elevating fashion commerce -our design for Almost Gods blends global luxury with seamless shopping, redefining online retail for the modern era.", demoLink: "#", githubLink: "#", coverImage: "https://www.designucrave.in/wp-content/uploads/2025/08/h3-portfolio4-909x600.jpg", featured: true, tags: ["Design", "Ecommerce"], primaryColor: "#81d742", order: 1 },
  { id: "prj_3", title: "Hearts With Fingers", category: "E-commerce", description: "Crafting conscious ecommerce that honors Indian heritage with seamless, ethical shopping.", demoLink: "#", githubLink: "#", coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/06/hearts-with-fingers-1-909x600.jpg", featured: true, tags: ["Heritage", "Shopping"], primaryColor: "#577257", order: 2 },
  { id: "prj_4", title: "Exurbe Cosmetics", category: "Business", description: "Vegan beauty brand digital transformation.", demoLink: "#", githubLink: "#", coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/06/Exurbe-vegonn-beauty-370x362.jpg", featured: false, tags: ["Beauty", "Branding"], primaryColor: "#009b77", order: 3 },
  { id: "prj_5", title: "Bliss Impex", category: "Business", description: "Corporate website for premium fabric manufacturers.", demoLink: "#", githubLink: "#", coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/07/Bliss-impex-company-website-scaled-370x362.jpg", featured: false, tags: ["Corporate", "Textile"], primaryColor: "#577257", order: 4 },
];

export const defaultTestimonialsSection = {
  eyebrow: "Testimonial",
  heading: "What Our Clients Say",
  description: "We value experimentation, the reformation of the message, and smart incentives. We offer a variety of services and solutions worldwide.",
};

export const defaultTestimonials = [
  { id: "test_1", name: "Vivek Kukreja", company: "", designation: "Advocate", rating: 5, review: "Design U Crave brought our brand vision to life with creativity and precision. Their design expertise made a lasting impact on our identity.", image: "", bgColor: "#ffffff", textColor: "#4a4a4a", order: 0 },
  { id: "test_2", name: "Anita Yadav", company: "", designation: "E-commerce Manager", rating: 5, review: "Thanks to the team for making my Shopify store launch smooth and professional. They handled everything with incredible precision and care.", image: "", bgColor: "#ffffff", textColor: "#4a4a4a", order: 1 },
  { id: "test_3", name: "Rahul Verma", company: "", designation: "Startup Founder", rating: 5, review: "An absolute game-changer. The team's dedication to understanding our core values translated into a phenomenal digital presence.", image: "", bgColor: "#ffffff", textColor: "#4a4a4a", order: 2 },
  { id: "test_4", name: "Priya Sharma", company: "", designation: "Marketing Director", rating: 5, review: "Their strategic approach to our UI/UX completely transformed our user engagement metrics. Highly recommend their services to any growing brand.", image: "", bgColor: "#ffffff", textColor: "#4a4a4a", order: 3 },
  { id: "test_5", name: "James Carter", company: "", designation: "CEO, TechFlow", rating: 5, review: "Reliable, innovative, and deeply committed to quality. They didn't just build us a website; they built us a digital growth engine.", image: "", bgColor: "#ffffff", textColor: "#4a4a4a", order: 4 },
  { id: "test_6", name: "Sneha Patel", company: "", designation: "Boutique Owner", rating: 5, review: "From branding to digital marketing, their holistic approach gave our boutique the modern refresh it desperately needed. Fantastic work!", image: "", bgColor: "#ffffff", textColor: "#4a4a4a", order: 5 },
];

export const defaultBlogSection = {
  eyebrow: "Our Blog",
  heading: "Latest News & Articles",
  description: "Follow our latest news and thoughts which focuses exclusively on design, art, vintage, and also work updates.",
};

export const defaultBlog = [
  {
    id: "blog_1",
    title: "How to use AI for personalization marketing", //[cite: 16]
    author: "Admin",
    date: "2021-05-15", //[cite: 16]
    tags: ["Marketing", "AI"], //[cite: 16]
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/05/g4.jpg", //[cite: 16]
    content: "<p>How to use AI for personalization marketing</p>",
    status: "published",
    seoTitle: "AI Personalization Marketing",
    seoDescription: "Learn how to use AI for personalization marketing.",
  },
  {
    id: "blog_2",
    title: "How to build a memorable brand identity online", //[cite: 16]
    author: "Admin",
    date: "2021-05-15", //[cite: 16]
    tags: ["Brand Identity", "Design"], //[cite: 16]
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/05/g11.jpg", //[cite: 16]
    content: "<p>How to build a memorable brand identity online</p>",
    status: "published",
    seoTitle: "Memorable Brand Identity",
    seoDescription: "How to build a memorable brand identity online.",
  },
  {
    id: "blog_3",
    title: "The power of user-centric thinking in modern design", //[cite: 16]
    author: "Admin",
    date: "2021-05-15", //[cite: 16]
    tags: ["Design", "Digital"], //[cite: 16]
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/05/g12.jpg", //[cite: 16]
    content: "<p>The power of user-centric thinking in modern design</p>",
    status: "published",
    seoTitle: "User-Centric Thinking",
    seoDescription: "The power of user-centric thinking in modern design.",
  },
  {
    id: "blog_4",
    title: "10 SEO strategies to boost your organic website traffic",
    author: "Admin",
    date: "2021-06-02",
    tags: ["SEO Strategy"],
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/05/g1.jpg",
    content: "<p>10 SEO strategies to boost your organic website traffic</p>",
    status: "published",
    seoTitle: "10 SEO Strategies",
    seoDescription: "10 SEO strategies to boost your organic website traffic.",
  },
  {
    id: "blog_5",
    title: "Maximizing conversions on your Shopify store",
    author: "Admin",
    date: "2021-07-18",
    tags: ["E-commerce"],
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/05/g2.jpg",
    content: "<p>Maximizing conversions on your Shopify store</p>",
    status: "published",
    seoTitle: "Maximizing Shopify Conversions",
    seoDescription: "Maximizing conversions on your Shopify store.",
  },
  {
    id: "blog_6",
    title: "Leveraging Instagram Reels for organic brand growth",
    author: "Admin",
    date: "2021-08-22",
    tags: ["Social Media"],
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/05/g3.jpg",
    content: "<p>Leveraging Instagram Reels for organic brand growth</p>",
    status: "published",
    seoTitle: "Instagram Reels for Brand Growth",
    seoDescription: "Leveraging Instagram Reels for organic brand growth.",
  },
  {
    id: "blog_7",
    title: "Why modern frameworks are the future of web apps",
    author: "Admin",
    date: "2021-09-05",
    tags: ["Web Dev"],
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/05/g5.jpg",
    content: "<p>Why modern frameworks are the future of web apps</p>",
    status: "published",
    seoTitle: "Modern Web App Frameworks",
    seoDescription: "Why modern frameworks are the future of web apps.",
  },
  {
    id: "blog_8",
    title: "Designing truly accessible interfaces for everyone",
    author: "Admin",
    date: "2021-10-12",
    tags: ["UI/UX"],
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/05/g6.jpg",
    content: "<p>Designing truly accessible interfaces for everyone</p>",
    status: "published",
    seoTitle: "Accessible Interface Design",
    seoDescription: "Designing truly accessible interfaces for everyone.",
  }
];

// ---------------------------------------------------------------------------
// Standalone "About Page" (/about) content — distinct from the homepage
// About *section* (defaultAbout above). Shape matches the form built in
// pages/AboutPageEditor.jsx.
// ---------------------------------------------------------------------------
export const defaultAboutPage = {
  heroEyebrow: "About Design U Crave",
  heroTitle: "We design brands that<br /><em>actually convert.</em>",
  heroSubtitle:
    "A design-led creative studio from Gurugram - building digital products, brand identities, and growth strategies for ambitious businesses.",
  heroSince: "Est. in Gurugram, India",
  heroBadge: "Currently taking new projects",
  stats: [
    { num: "50", suffix: "+", label: "Projects delivered" },
    { num: "30", suffix: "+", label: "Happy clients" },
    { num: "11", suffix: "", label: "Services offered" },
    { num: "3", suffix: "+", label: "Years of expertise" },
  ],
  storyEyebrow: "Our Story",
  storyTitle: "Built from a craving to<br /><em>create better.</em>",
  storyQuote:
    "Good design isn't decoration - it's the difference between a brand that's forgotten and one that's remembered.",
  storyDesc:
    "Design U Crave Technologies was founded with one conviction: that great design and smart strategy together can transform how a business is perceived - and how it performs. Based out of Gurugram, we work with startups, growing brands, and established businesses across India to deliver digital experiences that are not just visually strong but built to achieve real outcomes - more leads, more trust, more growth.",
  storyPillTitle: "Design-led. Results-driven.",
  storyPillDesc: "Strategy + creativity in every project",
  storyImage: "",
  valuesEyebrow: "What Drives Us",
  valuesTitle: "Our Core <em>Values</em>",
  valuesSubtitle: "Everything we build - from a logo to a full e-commerce platform - is guided by these principles. They're not just words on a wall; they shape how we work with every client.",
  coreValues: [
    { title: "Design with Intent", desc: "Every pixel, every layout choice has a reason. We don't just make things look good - we make them work for your specific goals.", icon: "Target" },
    { title: "Client-First Thinking", desc: "Your business goals are our brief. We listen deeply, ask the right questions, and build solutions that actually solve the problem.", icon: "Users" },
    { title: "Growth-Led Outcomes", desc: "We measure success by what the work achieves - traffic, conversions, brand recall. Beautiful work that doesn't convert isn't done yet.", icon: "TrendingUp" },
    { title: "Quality without Compromise", desc: "We'd rather take one more day than ship something we're not proud of. Attention to craft is non-negotiable in everything we do.", icon: "Award" },
    { title: "Transparency Always", desc: "No jargon, no black boxes. We keep you informed at every step - timelines, decisions, and feedback loops are always open.", icon: "MessageCircle" },
    { title: "Move Fast, Build Right", desc: "We respect your deadlines. Our process is structured to deliver quickly without cutting corners on quality or strategy.", icon: "Clock" },
  ],
  processEyebrow: "How We Work",
  processTitle: "Our 5-Step <em>Process</em>",
  processSteps: [
    { name: "Discover", desc: "Deep-dive into your brand, audience, goals and competition.", icon: "Search" },
    { name: "Design", desc: "Wireframes, concepts and high-fidelity prototypes for your approval.", icon: "PenTool" },
    { name: "Build", desc: "Pixel-perfect development - responsive, fast and production-ready.", icon: "Code2" },
    { name: "Launch", desc: "Thorough QA, final review and seamless go-live with your team.", icon: "Globe2" },
    { name: "Grow", desc: "SEO, marketing, and ongoing support to keep scaling your results.", icon: "TrendingUp" },
  ],
  teamEyebrow: "The People",
  teamTitle: "Meet the <em>Team</em>",
  team: [
    { name: "Nidhi", role: "UI/UX Designer & Digital Strategist", bio: "Leads design direction, client strategy and creative output at Design U Crave - bringing together visual craft and business thinking in every project.", initials: "NK", photo: "" },
  ],
  whyUsEyebrow: "Why Choose Us",
  whyUsTitle: "The Design U Crave<br/><em>Difference</em>",
  whyUsSubtitle: "We're not a vendor - we're a creative partner invested in your growth. Here's what sets us apart from the rest.",
  whyUsFeatures: [
    { title: "End-to-end delivery", desc: "From strategy to design to development to marketing - under one roof, one team, one vision." },
    { title: "Business-first mindset", desc: "Every design decision is tied to a business outcome. We ask \"why\" before we ask \"what does it look like.\"" },
    { title: "Fast turnaround, premium output", desc: "Our structured process means you get quality work delivered on time - every time." },
    { title: "Transparent collaboration", desc: "Regular updates, clear timelines, and open feedback loops - you're never left wondering what's happening." },
    { title: "Long-term support", desc: "We don't disappear after launch. Maintenance, updates, and growth support are always available." },
  ],
  ctaTitle: "Ready to build something<br/><em>remarkable?</em>",
  ctaSubtitle: "Tell us about your project and let's explore how we can help your brand grow.",
};

// ---------------------------------------------------------------------------
// Standalone "Services Page" (/services) content — distinct from the
// homepage Services *list* (defaultServices above). Shape matches the form
// built in pages/ServicePageManger.jsx.
// ---------------------------------------------------------------------------
export const defaultServicePage = {
  introEyebrow: "Gurgaon's Leading Digital Agency",
  introTitle: "Design. Develop.<em>Dominate</em> Online.",
  introSubtitle:
    "From AI-powered websites to Shopify stores that sell, and SEO that drives real leads — we build digital products that grow your business.",
  services: [
    {
      id: "brand-identity",
      cat: "design",
      name: "Brand Identity",
      desc: "We design complete brand systems - logo, typography, color, and brand guidelines - so every touchpoint feels consistent and recognizable.",
      tags: ["Logo Design", "Typography", "Brand Guidelines"],
      icon: "PenTool",
      featured: false,
      badge: "",
    },
    {
      id: "ui-ux-design",
      cat: "design",
      name: "UI/UX Design",
      desc: "Wireframes and prototypes designed around how people actually use a product - guided by current UX trends, not just what looks good in a mockup.",
      tags: ["Wireframing", "Prototyping", "User Research"],
      icon: "Monitor",
      featured: false,
      badge: "",
    },
    {
      id: "development",
      cat: "dev",
      name: "Development (Web & E-Commerce)",
      desc: "Custom websites and online stores built on Shopify and WooCommerce, with WhatsApp catalog sync and CRM integration so every visitor becomes a lead you can follow up on automatically.",
      tags: ["Shopify & WooCommerce", "WhatsApp Integration", "CRM Integration"],
      icon: "ShoppingBag",
      featured: true,
      badge: "",
    },
    {
      id: "seo-ai-content",
      cat: "marketing",
      name: "SEO & AI Content",
      desc: "AI-assisted keyword research, technical SEO audits, and a content strategy built to rank on Google - and increasingly, on AI search like ChatGPT and Gemini.",
      tags: ["Technical SEO", "On-Page SEO", "Link Building"],
      icon: "Search",
      featured: false,
      badge: "AI-Powered",
    },
    {
      id: "performance-marketing",
      cat: "marketing",
      name: "Performance Marketing",
      desc: "Google Ads, Meta Ads, LinkedIn Ads, and programmatic campaigns - managed and optimized to generate real leads and measurable ROI.",
      tags: ["Google Ads", "Meta Ads", "Remarketing"],
      icon: "TrendingUp",
      featured: false,
      badge: "",
    },
    {
      id: "social-media-management",
      cat: "marketing",
      name: "Social Media Management",
      desc: "We plan, create, and manage your social channels end-to-end - consistent posting, engagement, and a content calendar that keeps your brand visible.",
      tags: ["Content Calendar", "Community Management", "Platform Strategy"],
      icon: "MessageSquare",
      featured: false,
      badge: "",
    },
    {
      id: "ai-solutions",
      cat: "ai",
      name: "AI Solutions",
      desc: "Chatbots, WhatsApp automation, and AI-powered workflows that handle inquiries, recommend products, and turn conversations into orders - around the clock.",
      tags: ["AI Chatbots", "WhatsApp Automation", "Workflow Automation"],
      icon: "Cpu",
      featured: false,
      badge: "AI-Powered",
    },
    {
      id: "photography",
      cat: "design",
      name: "Photography",
      desc: "Professional photography for your products, events, and biggest moments — fully edited, delivered on time, shot to sell and shot to remember.",
      tags: ["Product Photography", "Event Photography", "Wedding Photography"],
      icon: "Camera",
      featured: false,
      badge: "",
    },
  ],
  processEyebrow: "Our Process",
  processTitle: "How We Turn Your <em>Vision into Results</em>",
  processSteps: [{ name: "Discover" }, { name: "Strategise" }, { name: "Execute" }, { name: "Grow" }],
  pricingEyebrow: "Transparent Pricing",
  pricingTitle: "Packages Built for <em>Every Stage</em>",
  pricingPlans: [
    {
      tier: "Starter",
      name: "Launch",
      price: "Custom",
      period: "/ project",
      popular: false,
      features: [
        "Landing page or 5-page website",
        "UI/UX design + development",
        "Mobile responsive design",
        "Basic SEO setup",
        "Google Analytics integration",
        "1 month post-launch support",
      ],
    },
    {
      tier: "Growth",
      name: "Scale",
      price: "Custom",
      period: "/ project",
      popular: true,
      features: [
        "Full website or e-commerce store",
        "UI/UX design + development",
        "SEO strategy + content setup",
        "Social media 30-day starter pack",
        "Performance marketing setup",
        "Brand identity design",
        "3 months support & optimisation",
      ],
    },
    {
      tier: "Enterprise",
      name: "Dominate",
      price: "Custom",
      period: "/ retainer",
      popular: false,
      features: [
        "Everything in Scale",
        "AI chatbot + automation setup",
        "Ongoing SEO + content marketing",
        "Paid media management (Google + Meta)",
        "Monthly analytics reporting",
        "Dedicated account manager",
        "Priority support (24h response)",
      ],
    },
  ],
  ctaTitle: "<em>Grow Your Business</em><br/>With Us?",
  ctaSubtitle:
    "Book a free 30-minute strategy call. No pressure, no pitch — just an honest conversation about what will actually move the needle for your brand.",
};

// ---------------------------------------------------------------------------
// Project Showcase (/projectshowcase) — separate, larger case-study list.
// Shape matches pages/ProjectsManager.jsx.
// ---------------------------------------------------------------------------
export const defaultProjects = [
  {
    id: "proj_1",
    title: "HEAD 2 HIRE",
    client: "Business",
    description: "A corporate website for a recruitment agency.",
    projectLink: "#",
    coverImage: "https://www.designucrave.in/wp-content/uploads/2021/07/Screenshot-2025-08-12-at-8.13.39-PM.png",
    featured: true,
    tags: ["Corporate", "Web Design"],
    themeColor: "#577257",
  },
  {
    id: "proj_2",
    title: "Almost Gods",
    client: "E-commerce",
    description:
      "Elevating fashion commerce - our design for Almost Gods blends global luxury with seamless shopping, redefining online retail for the modern era.",
    projectLink: "#",
    coverImage: "https://www.designucrave.in/wp-content/uploads/2025/08/h3-portfolio4-909x600.jpg",
    featured: true,
    tags: ["Design", "Ecommerce"],
    themeColor: "#81d742",
  },
  {
    id: "proj_3",
    title: "Hearts With Fingers",
    client: "E-commerce",
    description: "Crafting conscious ecommerce that honors Indian heritage with seamless, ethical shopping.",
    projectLink: "#",
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/06/hearts-with-fingers-1-909x600.jpg",
    featured: true,
    tags: ["Heritage", "Shopping"],
    themeColor: "#577257",
  },
  {
    id: "proj_4",
    title: "Exurbe Cosmetics",
    client: "Business",
    description: "Vegan beauty brand digital transformation.",
    projectLink: "#",
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/06/Exurbe-vegonn-beauty-370x362.jpg",
    featured: false,
    tags: ["Beauty", "Branding"],
    themeColor: "#009b77",
  },
  {
    id: "proj_5",
    title: "Bliss Impex",
    client: "Business",
    description: "Corporate website for premium fabric manufacturers.",
    projectLink: "#",
    coverImage: "https://www.designucravetechnologies.com/wp-content/uploads/2021/07/Bliss-impex-company-website-scaled-370x362.jpg",
    featured: false,
    tags: ["Corporate", "Textile"],
    themeColor: "#577257",
  },
];


// ---------------------------------------------------------------------------
// Individual Service Detail pages (/services/:slug) — one entry per service,
// matched by `id` to the slug used in each page's route. Shape matches the
// fields ServiceTemplate.jsx actually renders for every service (bespoke
// sections like `channels`, `dashboard`, `leadFlow`, `gallery`, and the
// decorative `briefArt` are page-specific illustrations and stay hardcoded
// in the website code — only the universal content fields are managed here).
// ---------------------------------------------------------------------------
export const defaultServiceDetails = [
  {
    id: "brand-identity",
    name: "Brand Identity",
    titlePrefix: "Brand identities people",
    titleHighlight: " remember.",
    lead: "We design complete brand systems - logo, typography, color, and brand guidelines - so every touchpoint feels consistent and recognizable, from your website to your packaging.",
    tags: ["Logo Design", "Typography", "Brand Guidelines"],
    briefTitle: "More than a logo",
    briefP1: "Your brand is the first impression, the tone of voice, and the visual thread that ties every touchpoint together - your website, your packaging, your social feed, your invoices.",
    briefP2: "We build identities that hold up under real use: readable at 5px and at billboard size, consistent whether your team makes the next slide deck or your dev builds the next landing page.",
    includedTittle: "Design that's tested, not guessed",
    included: [
      { title: "Logo Design", desc: "Primary, secondary, and icon-only logo variations for every use case.", icon: "PenTool" },
      { title: "Color Palette", desc: "A curated palette that carries meaning and works across digital and print.", icon: "Palette" },
      { title: "Typography System", desc: "Font pairing and hierarchy so headings, body copy, and UI text stay consistent.", icon: "Type" },
      { title: "Brand Guidelines", desc: "A documented rulebook - spacing, do's and don'ts, imagery style - so anyone can apply the brand correctly.", icon: "BookOpen" },
    ],
    processTitle: "Everything you need to succeed",
    process: [
      { title: "Discovery & Research", desc: "A structured brief and stakeholder conversations to understand your business.", icon: "Search" },
      { title: "Concept & Moodboarding", desc: "Exploring visual directions - color, type, tone - to find the personality.", icon: "PenTool" },
      { title: "Identity Design", desc: "Designing and refining concepts, iterating with your feedback.", icon: "Monitor" },
      { title: "System Development", desc: "Extending the identity into a full visual system.", icon: "Code2" },
      { title: "Guidelines & Handoff", desc: "Documented in a brand guideline so your identity stays consistent.", icon: "Cpu" },
    ],
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    titlePrefix: "Interfaces built around",
    titleHighlight: " how people actually use them.",
    lead: "Wireframes and prototypes guided by real user behavior and current UX trends - not just what looks good in a static mockup.",
    tags: ["Wireframing", "Prototyping", "User Research"],
    briefTitle: "Design that's tested, not guessed",
    briefP1: "Good UI/UX design starts with structure, not color. We map the flow and hierarchy first - how someone moves from landing to conversion - before a single pixel is styled.",
    briefP2: "Then we layer in visual design, current interaction trends, and real usability testing, so what ships is something people can actually use, not just admire.",
    includedTittle: "From structure to a shippable interface",
    included: [
      { title: "Wireframing", desc: "Low-fidelity layouts that map structure and flow before visual design begins.", icon: "Monitor" },
      { title: "Interactive Prototyping", desc: "Clickable prototypes that simulate real user flows for testing and stakeholder buy-in.", icon: "PenTool" },
      { title: "User Research", desc: "Usability testing, interviews, and trend analysis to ground decisions in real behavior.", icon: "Users" },
      { title: "UI Design Systems", desc: "Reusable components, tokens, and style guides for consistent, scalable interfaces.", icon: "Layers" },
    ],
    processTitle: "From rough sketch to polished screen",
    process: [
      { title: "Research & Discovery", desc: "Understanding users, competitors, and business goals through interviews and audits.", icon: "Users" },
      { title: "User Flows & Wireframes", desc: "Mapping structure and flow - low-fidelity layouts that test the logic before visuals.", icon: "Monitor" },
      { title: "Visual & Interaction Design", desc: "Applying visual design and current UI trends to bring wireframes to life.", icon: "Eye" },
      { title: "Prototyping & Testing", desc: "Interactive prototypes and usability tests to validate decisions with real users.", icon: "PenTool" },
      { title: "Handoff & Dev Support", desc: "Developer-ready specs, design systems, and design QA support during build.", icon: "Code2" },
    ],
  },
  {
    id: "development",
    name: "Development (Web & E-Commerce)",
    titlePrefix: "Websites and stores that",
    titleHighlight: " capture every visitor as a lead.",
    lead: "Custom websites and online stores built on Shopify and WooCommerce, with WhatsApp catalog sync and CRM integration - so every visitor becomes a lead you can follow up on automatically.",
    tags: ["Shopify & WooCommerce", "WhatsApp Integration", "CRM Integration"],
    briefTitle: "A store that captures leads, not just clicks",
    briefP1: "A website that only displays products is doing half the job. We connect your Shopify or WooCommerce store directly to WhatsApp and your CRM, so a browsing visitor becomes a saved, trackable lead - automatically.",
    briefP2: "No manual exports, no lost inquiries. Every chat, cart, and form fill lands exactly where your team already works.",
    includedTittle: "Store, chat, and CRM - wired together",
    included: [
      { title: "Shopify & WooCommerce Development", desc: "Custom themes, plugins, and checkout flows built on the platform that fits your business.", icon: "ShoppingCart" },
      { title: "WhatsApp Catalog Sync", desc: "Your product catalog synced to WhatsApp Business, so customers can browse and order without leaving the chat.", icon: "MessageSquare" },
      { title: "CRM Integration", desc: "Every form fill, cart, and chat automatically logged and routed to your CRM for follow-up.", icon: "Database" },
    ],
    processTitle: "From blank cart to a working lead pipeline",
    process: [
      { title: "Discovery & Platform Selection", desc: "Understanding your catalog and workflow to choose Shopify or WooCommerce.", icon: "Search" },
      { title: "Design & Build", desc: "Building the storefront, theme by theme, page by page.", icon: "Monitor" },
      { title: "WhatsApp & CRM Setup", desc: "Connecting your product catalog to WhatsApp Business and wiring form/cart data into your CRM.", icon: "MessageSquare" },
      { title: "Testing & QA", desc: "Making sure checkout, WhatsApp sync, and CRM logging all work end-to-end.", icon: "CheckCircle" },
      { title: "Launch & Handoff", desc: "Going live, with your team trained on the new lead flow.", icon: "Send" },
    ],
  },
  {
    id: "seo-ai-content",
    name: "SEO & AI Content",
    badge: "✦ AI-Powered",
    titlePrefix: "Rank on Google -",
    titleHighlight: " and increasingly, on AI search.",
    lead: "AI-assisted keyword research, technical SEO audits, and a content strategy built to rank where your customers are actually searching - Google, ChatGPT, and Gemini alike.",
    tags: ["Technical SEO", "On-Page SEO", "Link Building"],
    briefTitle: "Search isn't just a results page anymore",
    briefP1: "People still Google things. But more and more, they're asking ChatGPT, Gemini, and Perplexity instead - and those tools decide which brands get mentioned in the answer.",
    briefP2: "We build SEO that works for both: the classic ranking factors that move you up on Google, and the structured, citable content that gets you referenced by AI.",
    includedTittle: "The fundamentals, done properly",
    included: [
      { title: "Technical SEO", desc: "Site speed, crawlability, indexing, and structured data - fixing what's broken under the hood.", icon: "Settings" },
      { title: "On-Page SEO", desc: "Keyword-optimized content, meta tags, internal linking, and page structure built to rank.", icon: "FileText" },
      { title: "Link Building", desc: "Earning authoritative backlinks that build domain trust over time.", icon: "Link2" },
    ],
    processTitle: "From audit to ranking",
    process: [
      { title: "SEO & Content Audit", desc: "Reviewing your current rankings, technical health, and content gaps.", icon: "Search" },
      { title: "Keyword & Topic Research", desc: "AI-assisted research to find what your audience actually searches - on Google and in AI chat.", icon: "Globe2" },
      { title: "Technical Fixes", desc: "Site speed, crawlability, structured data, and indexing issues resolved.", icon: "Settings" },
      { title: "Content & On-Page Optimization", desc: "Writing and optimizing pages to rank for both search engines and AI answer engines.", icon: "FileText" },
      { title: "Link Building & Reporting", desc: "Earning quality backlinks and tracking rankings, traffic, and AI citations over time.", icon: "Link2" },
    ],
  },
  {
    id: "social-media-management",
    name: "Social Media Management",
    titlePrefix: "One team. Every channel.",
    titleHighlight: " Consistently on-brand.",
    lead: "We plan, create, and manage your social channels end-to-end - consistent posting, real engagement, and a content calendar that keeps your brand visible.",
    tags: ["Content Calendar", "Community Management", "Platform Strategy"],
    briefTitle: "Posting sporadically doesn't build an audience",
    briefP1: "Consistency is what actually moves the algorithm and the audience. We run a structured content calendar, respond to your community in real time, and adapt tone and format per platform.",
    briefP2: "What works on Instagram doesn't work on LinkedIn - so we don't treat every channel the same way.",
    includedTittle: "Consistency, without the guesswork",
    included: [
      { title: "Content Calendar", desc: "A planned, consistent posting schedule so your brand shows up when it's supposed to, not just when there's time.", icon: "Calendar" },
      { title: "Community Management", desc: "Real engagement - replying to comments and DMs, building a community, not just broadcasting.", icon: "MessageSquare" },
      { title: "Platform Strategy", desc: "Content and tone tailored per platform, because what works on Instagram doesn't work on LinkedIn.", icon: "Target" },
    ],
    processTitle: "From strategy to a full content calendar",
    process: [
      { title: "Audit & Strategy", desc: "Reviewing your current channels and defining voice, goals, and platform priorities.", icon: "Search" },
      { title: "Content Planning", desc: "Building a content calendar mapped to campaigns, launches, and key dates.", icon: "Calendar" },
      { title: "Content Creation", desc: "Designing and writing posts, reels, and captions built for each platform.", icon: "PenTool" },
      { title: "Publishing & Engagement", desc: "Posting on schedule and responding to comments, DMs, and mentions in real time.", icon: "Share2" },
      { title: "Reporting & Iteration", desc: "Tracking what's resonating and adjusting the strategy month over month.", icon: "BarChart2" },
    ],
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    titlePrefix: "Ad spend that's",
    titleHighlight: " measured, not just spent.",
    lead: "Google Ads, Meta Ads, LinkedIn Ads, and programmatic campaigns - managed and optimized to generate real leads and measurable ROI, not just impressions.",
    tags: ["Google Ads", "Meta Ads", "Remarketing"],
    briefTitle: "Every rupee accountable to a result",
    briefP1: "Running ads is easy. Running ads that actually pay back is the hard part. We build campaigns around a full funnel - reach the right people, convert them, and bring back the ones who didn't buy yet.",
    briefP2: "No vanity metrics. Every campaign is measured against leads, conversions, and ROI - the numbers your business actually runs on.",
    includedTittle: "Every channel that moves the needle",
    included: [
      { title: "Google Ads", desc: "Search, Display, Shopping, and YouTube campaigns targeting high-intent buyers.", icon: "Globe2" },
      { title: "Meta Ads", desc: "Facebook & Instagram campaigns built for scroll-stopping creative and precise targeting.", icon: "Camera" },
      { title: "LinkedIn Ads", desc: "B2B campaigns that reach decision-makers by role, industry, and company size.", icon: "Users" },
      { title: "Remarketing & Programmatic", desc: "Re-engaging past visitors and buying inventory programmatically across the web.", icon: "RefreshCw" },
    ],
    processTitle: "From audit to scaled results",
    process: [
      { title: "Audit & Strategy", desc: "Reviewing past performance and defining the channels, budget, and KPIs that make sense.", icon: "Search" },
      { title: "Campaign Setup", desc: "Building out Google, Meta, LinkedIn, and programmatic campaigns with proper tracking in place.", icon: "Target" },
      { title: "Creative & Targeting", desc: "Crafting ad creative and audience targeting built to convert, not just get clicks.", icon: "PenTool" },
      { title: "Launch & Optimize", desc: "Running campaigns with ongoing bid, budget, and creative optimization.", icon: "TrendingUp" },
      { title: "Report & Scale", desc: "Transparent reporting on what's working, then scaling the channels that deliver ROI.", icon: "BarChart2" },
    ],
  },
  {
    id: "ai-solutions",
    name: "AI Solutions",
    badge: "✦ AI-Powered",
    titlePrefix: "AI that works",
    titleHighlight: " while you sleep.",
    lead: "Chatbots, WhatsApp automation, and AI-powered workflows that handle inquiries, recommend products, and turn conversations into orders - around the clock.",
    tags: ["AI Chatbots", "WhatsApp Automation", "Workflow Automation"],
    briefTitle: "Every conversation, answered instantly",
    briefP1: "Most inquiries happen outside business hours - a question at 11pm, a \"is this in stock?\" on a Sunday. AI chatbots and WhatsApp automation mean nobody waits for a reply.",
    briefP2: "And it's not just answering - it's recommending the right product and closing the order, without a human touching every chat.",
    includedTittle: "From first message to closed order",
    included: [
      { title: "AI Chatbots", desc: "Trained on your catalog and FAQs, answering instantly on your website and WhatsApp.", icon: "MessageSquare" },
      { title: "WhatsApp Automation", desc: "Automated replies, order confirmations, and follow-ups - without a human touching every chat.", icon: "Smartphone" },
      { title: "Workflow Automation", desc: "Connecting inquiries, orders, and CRM updates into one automatic pipeline.", icon: "RefreshCw" },
    ],
    processTitle: "From first prompt to a working assistant",
    process: [
      { title: "Discovery & Use Case Mapping", desc: "Identifying where AI actually saves time - FAQs, order status, product discovery.", icon: "Search" },
      { title: "Bot Training & Setup", desc: "Training the chatbot on your catalog, policies, and the questions you get most.", icon: "Settings" },
      { title: "WhatsApp & Channel Integration", desc: "Connecting the bot to WhatsApp, your website, and other channels.", icon: "Smartphone" },
      { title: "Workflow Automation", desc: "Wiring conversations into your CRM and order system automatically.", icon: "RefreshCw" },
      { title: "Launch & Continuous Learning", desc: "Going live, then refining responses based on real conversations.", icon: "TrendingUp" },
    ],
  },
  {
    id: "photography",
    name: "Photography",
    titlePrefix: "Photography that",
    titleHighlight: " tells your story properly.",
    lead: "Professional photography for your products, your events, and your biggest moments — shot to sell, shot to remember, fully edited and delivered on time.",
    tags: ["Product Photography", "Event Photography", "Wedding Photography"],
    briefTitle: "A photo is doing a job — make sure it does it well",
    briefP1: "A product page is only as good as its photos. A wedding album is a memory that lasts a lifetime. We shoot both with the same care — properly lit, properly composed, and properly edited.",
    briefP2: "Whether it's a catalog shoot for your store or a full day covering a wedding, you get a photographer who plans the shot before showing up, not one figuring it out on the day.",
    includedTittle: "Every shoot your brand actually needs",
    included: [
      { title: "Product Photography", desc: "Clean, catalog-ready shots — and lifestyle shots — that make your products look as good in photos as in person.", icon: "Camera" },
      { title: "Event Photography", desc: "Corporate events, launches, and celebrations — candid and posed shots that capture the room.", icon: "Users" },
      { title: "Wedding Photography", desc: "Full-day coverage, from getting-ready shots to the last dance, delivered as a complete story.", icon: "Heart" },
      { title: "Corporate & Headshot Photography", desc: "Professional headshots and team photos for your website, LinkedIn, and press.", icon: "User" },
      { title: "Videography & Reels", desc: "Short-form video content built for Instagram and YouTube, shot alongside your photography.", icon: "Video" },
    ],
    processTitle: "From consultation to final gallery",
    process: [
      { title: "Consultation & Planning", desc: "Understanding the shoot — product specs, event schedule, or wedding timeline.", icon: "MessageSquare" },
      { title: "Location & Setup", desc: "Scouting locations or setting up studio lighting for the shoot.", icon: "MapPin" },
      { title: "The Shoot", desc: "Capturing hundreds of frames, guided by a shot list built beforehand.", icon: "Camera" },
      { title: "Culling & Editing", desc: "Selecting the best shots and retouching each one to a polished final.", icon: "Layers" },
      { title: "Delivery & Gallery", desc: "A shareable online gallery, delivered on time, ready to use.", icon: "Image" },
    ],
  },
];
