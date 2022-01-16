/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://counting-stocks-front-end-6giol5n6o-gangslee.vercel.app/:path*",
      },
    ];
  },
};
