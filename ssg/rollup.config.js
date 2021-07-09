import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { defineConfig } from "rollup";
import * as fs from "fs";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

export default defineConfig([
  {
    input: "ssg/index.tsx",
    output: [
      {
        dir: "build/js",
        format: "esm",
      },
    ],
    preserveEntrySignatures: false,
    plugins: [
      nodeResolve({
        extensions,
        exportConditions: ["solid"],
      }),
      babel({
        babelHelpers: "bundled",
        extensions,
        presets: [
          ["solid", { generate: "dom", hydratable: true }],
          "@babel/preset-typescript",
        ],
      }),
      terser(),
      {
        name: "manifest",
        generateBundle: (options, bundle, isWrite) => {
          let preloadlist = [];

          Object.keys(bundle).forEach((fname) => {
            if (fname !== "index.js") {
              preloadlist.push(`/js/${fname}`);
            }
          });

          fs.mkdirSync("./ssg/build", { recursive: true });

          fs.writeFileSync(
            "./ssg/build/preloadlist.js",
            `export default ${JSON.stringify(preloadlist)};`
          );
        },
      },
    ],
  },
  {
    input: "ssg/main.tsx",
    output: [
      {
        dir: "ssg/build",
        exports: "auto",
        format: "cjs",
      },
    ],
    external: ["solid-js", "solid-js/web"],
    plugins: [
      nodeResolve({
        preferBuiltins: true,
        exportConditions: ["solid"],
        extensions,
      }),
      babel({
        babelHelpers: "bundled",
        extensions,
        presets: [
          ["solid", { generate: "ssr", hydratable: true }],
          "@babel/preset-typescript",
        ],
      }),
    ],
  },
]);
