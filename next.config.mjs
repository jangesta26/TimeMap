/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'readymadeui.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                pathname: '/**',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds:true,
    }
};

export default nextConfig;
