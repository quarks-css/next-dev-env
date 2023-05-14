/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.snapshot.managedPaths = [];
    config.resolve.symlinks = false;
    config.watchOptions.followSymlinks = true;

    return config;
  },
};

module.exports = nextConfig;
