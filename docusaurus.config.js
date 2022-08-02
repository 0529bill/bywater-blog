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
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "bywater-blog",
  organizationName: "0529bill",
  trailingSlash: false,
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
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/0529bill/bywater-blog",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
          src: "img/logo.svg",
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
            href: "https://0529bill.github.io/portfolio/#/portfolio/Resume",
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
                to: "/docs/intro",
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
    },
};
