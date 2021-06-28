require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "ocomm-dashboard",
    siteUrl: `https://sutdwth.com/`, // change later
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ocomm-dashboard",
        short_name: "ocomm-dashboard",
        start_url: "/",
        display: "standalone",
        icon: "src/assets/WTH_Square.jpg",
      },
    },
  ],
};
