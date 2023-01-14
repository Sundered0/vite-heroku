import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import applyEnvironment from "vite-plugin-environment";

// https://vitejs.dev/config/
export default function applyConfig({ mode }) {
  const ENV_PREFIX = "VITE_APP_";
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), ENV_PREFIX) };

  return defineConfig({
    plugins: [vue(), applyEnvironment("all", { prefix: ENV_PREFIX })],
    server: {
      host: true,
      port: Number(process.env.VITE_APP_PORT) || 3000,
    },
  });
}
