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
    class="block font-bold text-[15px]"
  >
    {{ label }}
  </NuxtLink>
</template>
