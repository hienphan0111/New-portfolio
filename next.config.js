/** @type {import('next').NextConfig} */
require('dotenv').config();

module.exports = {
  env: {
    ACCESS_KEY: process.env.ACCESS_KEY,
  }
};

const nextConfig = {}

module.exports = nextConfig
