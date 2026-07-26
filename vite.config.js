import { resolve } from "path";
import { defineConfig } from "vite";

/**
 * Vite rewrites <img src> to hashed /assets/* URLs, but leaves custom
 * data-lightbox-src attributes alone. After hashing, sync each trigger's
 * data-lightbox-src to its child img src so lightbox targets match dist.
 */
function syncLightboxSrc() {
  return {
    name: "sync-lightbox-src",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(
          /(<button\b[^>]*\bdata-lightbox-src=")([^"]*)("[^>]*>)([\s\S]*?)(<\/button>)/gi,
          (match, start, _oldSrc, mid, inner, end) => {
            const imgSrc = inner.match(/<img\b[^>]*\bsrc="([^"]+)"/i)?.[1];
            if (!imgSrc) return match;
            return `${start}${imgSrc}${mid}${inner}${end}`;
          }
        );
      },
    },
  };
}

export default defineConfig({
  plugins: [syncLightboxSrc()],
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
