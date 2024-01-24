/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: ["localhost"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/blog", // this path will be redirected to 404
  //       destination: "/404",
  //       permanent: true,
  //     },
  //     {
  //       source: "/integration", // this path will be redirected to 404
  //       destination: "/404",
  //       permanent: true,
  //     },
  //     {
  //       source: "/integrations", // this path will be redirected to 404
  //       destination: "/404",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
