const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
require("dotenv").config();
module.exports = {
  title: "Bywater-blog",
  tagline: "Frontend",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/bywater-blog/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/docusaurus.png",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "bywater-blog",
  organizationName: "0529bill",
  trailingSlash: false,
  onBrokenLinks: "ignore",
  // customFields: {
  //   ENVIRONMENT_VARIABLE_1: process.env.ENVIRONMENT_VARIABLE_1,
  //   ENVIRONMENT_VARIABLE_2: process.env.ENVIRONMENT_VARIABLE_2,
  // },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // breadcrumbs: true,
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "G-2TQ7GGQ5TW",
          anonymizeIP: true,
          // anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: "Bywater-blog",
        logo: {
          alt: "Bywater-blog Logo",
          src: "img/docusaurus.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/0529bill",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/in/lin-tse-175b4a158/",
            label: "Linkedin",
            position: "right",
          },
          {
            href: "https://docs.google.com/document/d/e/2PACX-1vScM-honepN0MDFjnOEg7YxSkE4wCM1fM8h0Em_-TQs2wewDZJXYeRieXvWBdarSi6P2JDzRr4-0NA3/pub",
            label: "Resume",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/bywater-blog/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                href: "https://github.com/0529bill",
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/lin-tse-175b4a158/",
                label: "Linkedin",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                href: "https://0529bill.github.io/portfolio/#/portfolio/Resume",
                label: "Resume",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bywater-blog. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "255MJDST9J",

        // Public API key: it is safe to commit it
        apiKey: "042194bcde760bd5121265193fbf9bad",

        indexName: "bywater",
      },
    },
};
