/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://coffee-shop-red-five.vercel.app/:path*",
      },
    ];
  },
  crossOrigin: "anonymous",
  images: {
    domains: ["images.unsplash.com"],
  },
};
