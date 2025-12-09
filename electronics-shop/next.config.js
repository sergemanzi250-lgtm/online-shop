/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    // Enable static optimization
    experimental: {
        optimizeCss: true,
    }
}

module.exports = nextConfig