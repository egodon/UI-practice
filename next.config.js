const withFonts = require('next-fonts');

module.exports = withFonts({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        path: 'empty',
        __dirname: true,
      };
    }

    return config;
  },
  env: {
    ROOT: process.cwd(),
  },
});
