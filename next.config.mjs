/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

// example: https://i.ibb.co.com/352j7DgQ/khameni.jpg

export default nextConfig;
