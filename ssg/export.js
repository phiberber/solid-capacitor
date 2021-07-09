const path = require("path");
const renderStatic = require("solid-ssr/static");

const pages = ["index", "bye"];
const entry = path.resolve(__dirname, "./build/main.js");
const public = path.resolve(__dirname, "../build");

renderStatic(
  pages.map((p) => ({
    entry,
    output: path.join(public, `${p}.html`),
    url: p === "index" ? "/" : `/${p}`,
  }))
);
