module.exports = {
  seo: {
    title: "Appliances EMEA",
    description: "Fast storefront",
    titleTemplate: "%s | FastStore",
    author: "Diego Donaggio",
  },
  theme: "custom-theme",
  platform: "vtex",
  api: {
    storeId: "appliancesemea",
    workspace: "master",
    environment: "vtexcommercestable",
    hideUnavailableItems: false,
    incrementAddress: false,
  },
  session: {
    currency: {
      code: "GBP",
      symbol: "£",
    },
    locale: "en-GB",
    channel: '{"salesChannel":"1","regionId":""}',
    country: "GBR",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },
  cart: {
    id: "",
    items: [],
    messages: [],
    shouldSplitItem: true,
  },
  storeUrl: "https://appliancesemea.vtex.app",
  secureSubdomain: "https://appliancesemea.myvtex.com/",
  checkoutUrl: "https://appliancesemea.myvtex.com/checkout",
  loginUrl: "https://appliancesemea.myvtex.com/login",
  accountUrl: "https://appliancesemea.myvtex.com/api/io/account",
  previewRedirects: {
    home: "/",
    plp: "/appliances",
    search: "/s?q=vacuum",
    pdp: "/smart-kitchen-dock/p",
  },
  lighthouse: {
    server: "http://localhost:3000",
    pages: {
      home: "/",
      pdp: "/smart-kitchen-dock/p",
      collection: "/appliances",
    },
  },
  cypress: {
    pages: {
      home: "/",
      pdp: "/smart-kitchen-dock/p",
      collection: "/appliances",
      collection_filtered:
        "/appliances/dyson?initialMap=c&initialQuery=appliances&map=category-1,brand",
      search: "/s?q=vacuum",
    },
  },
  analytics: {
    gtmContainerId: "GTM-PGHZ95N",
  },
  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },
  account: "appliancesemea",
  vtexHeadlessCms: {
    webhookUrls: [
      "https://appliancesemea.myvtex.com/cms-releases/webhook-releases",
    ],
  },
};
