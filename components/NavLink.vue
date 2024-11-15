<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  to: String,
  label: String,
  currentPath: String,
});
</script>

<template>
  <NuxtLink
    :to="to"
    :class="{
      'text-[#1EBD70]': currentPath === to,
      'text-[#333] hover:text-[#1EBD70]': currentPath !== to,
    }"
    class="text-sm font-semibold leading-6 hover:text-accent"
  >
    {{ label }}
  </NuxtLink>
</template>
