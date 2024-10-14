const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
    loader: 'custom',
    loaderFile: './my-loader.js',
    unoptimized: true,
  },
  basePath: process.env.DEPLOYED_GITHUB_PATH || '/vnagpal25.github.io',
  assetPrefix: process.env.DEPLOYED_GITHUB_PATH ? `${process.env.DEPLOYED_GITHUB_PATH}/` : '/vnagpal25.github.io',
}