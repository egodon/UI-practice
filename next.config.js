const withFonts = require('next-fonts');

module.exports = withFonts({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
});
