const webpack = require('webpack');
const { parsed: myEnv } = require('dotenv').config();

module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  },
  images: {
    domains: ['placeimg.com', 'images.unsplash.com']
  }
}
