export const SITE = {
  title: '',
  description: 'Your website description.',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/sgcatalyzed/Catalyzed-Capital-Docs/blob/master/Catalyzed%20Capital%20Logo%20Transparent.001.png',
    alt: 'Catalyzed Capital Logo',
  },
};

export const KNOWN_LANGUAGES = {
  English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: '', header: true },

    { text: 'Introduction', header: true },
    { text: 'Site Overview', link: 'en/introduction' },
    { text: 'Summary', link: 'en/summary' },

    { text: 'What We Do', header: true },
    { text: 'Section 1: The Web3 Opportunity', link: 'en/page-1' },
    { text: 'Section 2: Future of Global Capital Markets', link: 'en/page-2' },
    { text: 'Section 3: What is Catalyzed Capital?', link: 'en/page-3' },
    { text: 'Section 4: Catalzyed Return Fund Terms ', link: 'en/page-4' },

    { text: 'Additional Resources', header: true },
    { text: 'Section 5: Recommended Material', link: 'en/page-5' },
  ],
};
