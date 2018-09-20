module.exports = {
  env: {
    myapi: process.env.myapi || "http://287fa907.ngrok.io"
  },
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: "Akira",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Akira Dashboard" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900"
      },
      { rel: "stylesheet", href: "/css/icons/icomoon/styles.css" },
      { rel: "stylesheet", href: "/css/bootstrap.css" },
      { rel: "stylesheet", href: "/css/core.css" },
      { rel: "stylesheet", href: "/css/components.css" },
      { rel: "stylesheet", href: "/css/colors.css" }
    ],
    script: [
      { type: "text/javascript", src: "/js/core/libraries/jquery.min.js" },
      { type: "text/javascript", src: "/js/core/libraries/bootstrap.min.js" },
      { type: "text/javascript", src: "/js/core/app.js" },

      // Pages
      { type: "text/javascript", src: "/js/pages/dashboard.js" },
      {
        type: "text/javascript",
        src: "/js/pages/layout_navbar_secondary_fixed.js"
      },
      {
        type: "text/javascript",
        src: "/js/pages/dashboard.js"
      },
      {
        type: "text/javascript",
        src: "/js/pages/datatables_basic.js"
      },
      {
        type: "text/javascript",
        src: "/js/pages/form_layouts.js"
      },

      // Plugins
      { type: "text/javascript", src: "/js/plugins/loaders/pace.min.js" },
      {
        type: "text/javascript",
        src: "/js/plugins/ui/headroom/headroom.min.js"
      },
      {
        type: "text/javascript",
        src: "/js/plugins/tables/datatables/datatables.min.js"
      },
      {
        type: "text/javascript",
        src: "/js/plugins/forms/selects/select2.min.js"
      },
      {
        type: "text/javascript",
        src: "/js/plugins/forms/styling/uniform.min.js"
      },
      { type: "text/javascript", src: "/js/plugins/ui/ripple.min.js" },
      { type: "text/javascript", src: "/js/plugins/loaders/blockui.min.js" },
      { type: "text/javascript", src: "/js/plugins/ui/nicescroll.min.js" },
      { type: "text/javascript", src: "/js/plugins/ui/drilldown.js" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
