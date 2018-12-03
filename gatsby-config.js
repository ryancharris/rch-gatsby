module.exports = {
  siteMetadata: {
    title: "Ryan C. Harris",
    siteUrl: "https://www.ryancharris.com",
    description: "Frontend software engineer and developer in Philadelphia, PA",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/css"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              linkImagesToOriginal: false,
              maxWidth: 590,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        // icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/images/svg/",
        },
      },
    },
  ],
};
