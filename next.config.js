/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://coffee-shop-h5gjmlx89-adrienbelcastros-projects.vercel.app/:path*",
      },
    ];
  },
  crossOrigin: "anonymous",
  images: {
    domains: ["images.unsplash.com"],
  },
};
