/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/detail/:symbol*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
