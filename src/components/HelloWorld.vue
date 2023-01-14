<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

function getImportEnvVar(key: string) {
  // if (import.meta.env[key] === undefined) {
  //   throw new Error(`Env variable ${key} is not found`);
  // }
  return import.meta.env[key] || "NULL";
}
function getProcessEnvVar(key: string) {
  // if (import.meta.env[key] === undefined) {
  //   throw new Error(`Env variable ${key} is not found`);
  // }
  return process.env[key] || "NULL";
}

const importEnv = getImportEnvVar("VITE_APP_IMPORT_ENV");
const processEnv = getProcessEnvVar("VITE_APP_PROCESS_ENV");
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>import env: {{ importEnv }}</p>
    <p>process env: {{ processEnv }}</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
