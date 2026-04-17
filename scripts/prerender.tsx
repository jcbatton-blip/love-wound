/*
 * Post-build SSG: renders the React tree to static HTML with react-dom/server
 * and injects it into dist/public/index.html so crawlers and AI agents see
 * the full content on first paint. Hydration in main.tsx takes over on load.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { MotionConfig } from "framer-motion";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import App from "../client/src/App";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const indexPath = path.join(repoRoot, "dist", "public", "index.html");

if (!fs.existsSync(indexPath)) {
  throw new Error(`Prerender: missing ${indexPath}. Run vite build first.`);
}

// Render through MotionConfig isStatic so motion components short-circuit
// animation bookkeeping. Then scrub any residual Framer-Motion "hidden"
// inline styles (opacity:0/translateY) from the HTML so crawlers, AI
// agents, and no-JS users see visible content. Client hydration re-attaches
// full motion behavior and runs animations normally.
let rendered = renderToString(
  <MotionConfig isStatic>
    <App />
  </MotionConfig>
);

// Strip Framer's initial-hidden inline styles. Patterns covered:
//   style="opacity:0;transform:translateY(40px)"
//   style="opacity:0;transform:translateY(40px);..."
//   ...other-inline-before;opacity:0;transform:translateY(40px)
const before = rendered.length;
rendered = rendered
  // Whole style attr that ONLY hides content → remove the attr
  .replace(/\s*style="opacity:0;transform:translateY\([^)]*\)"/g, "")
  // opacity:0;transform:translateY(...) embedded in a longer style → strip the tokens
  .replace(/opacity:0;transform:translateY\([^)]*\);?/g, "")
  // Any leftover bare opacity:0; inside a style attr
  .replace(/opacity:0;?/g, "")
  // Clean up empty style=""
  .replace(/\s*style=""/g, "");

console.log(`[prerender] Scrubbed ${before - rendered.length} chars of hidden motion styles`);
const template = fs.readFileSync(indexPath, "utf8");

const rootMarker = '<div id="root"></div>';
if (!template.includes(rootMarker)) {
  throw new Error(
    `Prerender: could not find '<div id="root"></div>' in index.html.`
  );
}

const output = template.replace(rootMarker, `<div id="root">${rendered}</div>`);
fs.writeFileSync(indexPath, output, "utf8");

console.log(
  `[prerender] Injected ${rendered.length.toLocaleString()} chars into ${path.relative(
    repoRoot,
    indexPath
  )}`
);
