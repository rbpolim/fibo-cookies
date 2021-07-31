const withImages = require("next-images");

module.exports = {
  reactStrictMode: true,
};

module.exports = withImages({
  esModule: true,
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
});
