export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Mark Tham Realtor Singapore",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "For you, with you" },
      { name: "format-detection", content: "telephone=no" },

      {
        hid: "og:url",
        name: "og:url",
        content: "https://www.markthamrealtor.sg/",
      },
      { hid: "og:type", name: "og:type", content: "website" },
      {
        hid: "og:title",
        name: "og:title",
        content: "Mark Tham Realtor Singapore",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "For you, with you",
      },
    ],
    script: [
      // {
      //   src: "https://www.youtube.com/iframe_api",
      //   async: true,
      // },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      },
    ],
  },

  env: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://www.marktham.sg/"
        : "http://localhost:3000",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/VueFormulate.js'
    // '~/plugins/vue-youtube-player.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    // '@nuxtjs/google-analytics',
    "@braid/vue-formulate/nuxt",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/dotenv",
    "@nuxtjs/axios",
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  plugins: [],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  googleFonts: {
    families: {
      "Josefin+Sans": true,
      Lexend: true,
      "IBM+Plex+Mono": true,
      Inter: true,
      "Open+Sans": true,
    },
  },
  generate: {
    fallback: true,
  },
};
