import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        work: resolve(__dirname, "work.html"),
        teachersLounge: resolve(__dirname, "teachers-lounge.html"),
        oracleHealth: resolve(__dirname, "oracle-health.html"),
        anchor: resolve(__dirname, "anchor.html"),
        glossierApp: resolve(__dirname, "glossier-app.html"),
        dexter: resolve(__dirname, "dexter.html"),
        oldNavy: resolve(__dirname, "old-navy.html"),
        gapPowerReviews: resolve(__dirname, "gap-power-reviews.html"),
        clientWork: resolve(__dirname, "client-work.html"),
        drTeals: resolve(__dirname, "dr-teals.html"),
      },
    },
  },
});
