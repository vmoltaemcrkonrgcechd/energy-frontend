<script lang="ts" setup>
import { Doughnut } from "vue-chartjs";
import { computed, PropType } from "vue";

const props = defineProps({
  labels: Array as PropType<string[]>,
  colors: Array as PropType<string[]>,
  data: Array as PropType<number[]>,
});

const doughnutData = computed(() => {
  return {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: props.colors,
        borderRadius: 5,
        spacing: 5,
        borderWidth: 0,
      },
    ],
  };
});

const doughnutOptions = {
  aspectRatio: 2,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};
</script>

<template>
  <Doughnut :data="doughnutData" :options="doughnutOptions" />
</template>
