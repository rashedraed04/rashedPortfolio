/** @type {import('next').NextConfig} */
const legacyRoutes = [
  "/about",
  "/portfolio",
  "/case-study/:path*",
  "/blogs/:path*",
  "/web-development",
  "/app-development",
  "/ai-development",
  "/software-development",
  "/privacy-policy",
  "/terms",
  "/copyright-policy",
  "/refund-policy",
  "/services",
];

const sectionRoutes = ["/home", "/skills", "/projects", "/experience", "/contact"];

const nextConfig = {
  async redirects() {
    return [
      ...legacyRoutes.map((source) => ({ source, destination: "/", permanent: false })),
      ...sectionRoutes.map((source) => ({ source, destination: `/#${source.slice(1)}`, permanent: false })),
    ];
  },
};

export default nextConfig;
