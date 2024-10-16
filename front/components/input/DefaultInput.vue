<template>
  <input
    v-model="value"
    type="text"
    :placeholder="placeholder"
    class="rounded-md px-3 py-2 border bg-white cursor-text h-11 focus:border-blue-500 focus:ring focus:ring-blue-100"
  />
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const value = defineModel();

defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});
</script>
