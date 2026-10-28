import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [
      // These original-owner routes are redirected to the portfolio homepage.
      "src/app/about/**",
      "src/app/portfolio/**",
      // This animated background belonged to the replaced About section.
      "src/components/ui/Dots-bg.js",
    ],
  },
  ...nextVitals,
];

export default eslintConfig;
