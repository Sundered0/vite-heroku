import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default function applyConfig({ mode }) {
  const ENV_PREFIX = "VITE_APP_";
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), ENV_PREFIX) };

  return defineConfig({
    plugins: [vue()],
  });
}
