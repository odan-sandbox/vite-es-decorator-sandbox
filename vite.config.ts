import { defineConfig, Plugin } from "vite";
import { transform } from "@babel/core";

function babelPlugin(): Plugin {
  return {
    name: "babel-plugin",
    transform(code, id) {
      if (id.endsWith(".ts")) {
        const result = transform(code);
        return result?.code;
      }
      return code;
    },
  };
}

export default defineConfig({
  plugins: [babelPlugin()],
});
