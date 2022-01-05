import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/main.js",
    output: [
      {
        format: "esm",
        file: "dist/librabry.mjs",
      },
      {
        format: "cjs",
        file: "dist/librabry.js",
      },
    ],
    plugins: [vue(), peerDepsExternal()],
  },
];
