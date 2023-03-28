<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  title: String as PropType<string>,
});
</script>

<template>
  <div class="rounded-md shadow-md bg-white p-3 flex flex-col gap-y-3">
    <h2 class="text-sm uppercase text-[#0c4272] font-bold">
      {{ title }}
    </h2>
    <div class="flex items-center justify-center w-full h-full">
      <slot />
    </div>
  </div>
</template>
