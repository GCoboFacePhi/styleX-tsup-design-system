import stylexPlugin from '@stylexjs/nextjs-plugin';

/** @type {import('next').NextConfig} */

const nextConfig = {};

const __dirname = new URL('.', import.meta.url).pathname;

export default stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
