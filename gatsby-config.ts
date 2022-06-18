import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gamebook template`,
    author: {
      name: `Massick`,
      summary: `Web developer`,
    },
    description: `A free and open source Gamebook template using GatsbyJS`,
    siteUrl: `https://massick.is-a.dev/`,
    social: {
      twitter: `M4ss1ck`,
    },
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  ],
  jsxRuntime: `automatic`,
};

export default config;
