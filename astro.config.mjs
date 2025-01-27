import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://feature-tour.netlify.app",
  outDir: "dist",
  build: {
    format: "directory", // Changed to 'directory' for clean URL structure
    assetsPrefix: "/", // Use relative paths by default
  },
  server: {
    trailingSlash: "ignore",
  },
  integrations: [
    preact({
      include: ["**/*.{tsx,jsx}"],
    }),
    sitemap({
      canonicalURL: "https://feature-tour.netlify.app",
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
        },
      },
      filter: (page) => !page.includes("/admin"),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
    gfm: true,
    // Moved inlineStylesheets configuration here
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      assetsInlineLimit: 4096,
      cssTarget: "es2020",
    },
    // Removed unnecessary SSR configuration for @astrojs/image
  },
});