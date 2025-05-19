import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/localization/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  images: {
    domains: ['cocrmtest.fra1.digitaloceanspaces.com']
  }
};

export default withNextIntl(nextConfig);
