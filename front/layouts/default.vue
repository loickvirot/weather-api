<template>
  <div class="bg-slate-50 min-h-screen">
    <div class="w-full p-6 md:w-6/12 md:mx-auto">
      <h1 class="text-2xl font-bold">Weather</h1>
      <p>Get current weather and forecast.</p>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
