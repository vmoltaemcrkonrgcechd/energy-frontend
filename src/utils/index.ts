import { computed } from "vue";

export const getColors = computed((): string[] => {
  return ["#0c4272", "#1b6f85", "#2e9993"];
});

export const getLabels = computed((): string[] => {
  return ["ТЭС", "АЭС", "ГЭС"];
});
