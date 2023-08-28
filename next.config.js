/** @type {import('next').NextConfig} */

// Include process module
const process = require('process');

let nextConfig = {}

if (process.env.APP_ENV === "static") {
  nextConfig = {
    output: 'export',
    images: {
      loader: 'custom',
      loaderFile: './my-loader.ts',
    }
  }
}

module.exports = nextConfig
