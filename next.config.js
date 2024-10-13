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
  },
  output: 'export',
  basePath: "/vnagpal25.github.io",
  assetPrefix: "/vnagpal25.github.io/",
  distDir: 'out', // The output directory for the exported files
}