/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com", "flowbite.com"], // {{ edit_1 }} Allow the specified domain for images
  },
};

export default nextConfig;
