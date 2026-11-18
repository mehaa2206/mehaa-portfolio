/* Dependency-free project checks used by GitHub Actions. */
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const required = [
  "index.html", "css/theme.css", "css/style.css", "js/main.js",
  "images/portrait-placeholder.svg", "images/family-placeholder.svg",
  ".github/workflows/validate.yml", ".github/workflows/deploy.yml",
  ".github/workflows/pr-checks.yml", ".github/workflows/lighthouse.yml",
  ".github/workflows/notify.yml"
];
let failed = false;
for (const item of required) {
  const full = path.join(root, item);
  if (!fs.existsSync(full)) {
    console.error(`MISSING: ${item}`);
    failed = true;
  } else if (fs.statSync(full).size === 0) {
    console.error(`EMPTY: ${item}`);
    failed = true;
  } else {
    console.log(`OK: ${item}`);
  }
}
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "js/main.js"), "utf8");
for (const [label, pattern] of [
  ["HTML5 doctype", /^<!doctype html>/i],
  ["main landmark", /<main\b/i],
  ["viewport metadata", /name="viewport"/i],
  ["stylesheet link", /css\/style\.css/],
  ["deferred JavaScript", /js\/main\.js/]
]) {
  if (!pattern.test(html)) { console.error(`CHECK FAILED: ${label}`); failed = true; }
  else console.log(`CHECK OK: ${label}`);
}
if (!/addEventListener/.test(js)) { console.error("CHECK FAILED: JavaScript interactions"); failed = true; }
if (failed) process.exit(1);
console.log("Portfolio structure validation passed.");
