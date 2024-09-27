/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "i.pinimg.com", "www.shutterstock.com"], // Add Shutterstock domain here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com", // Add Shutterstock to remote patterns if needed
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
