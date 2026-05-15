/**
 * Skip Playwright browser download on Vercel (static deploy only).
 * Local dev: npm ci && npm test still installs Chromium via this script.
 */
import { execSync } from "node:child_process";

if (process.env.VERCEL === "1") {
  process.exit(0);
}

execSync("env -u PLAYWRIGHT_BROWSERS_PATH playwright install chromium", {
  stdio: "inherit",
});
