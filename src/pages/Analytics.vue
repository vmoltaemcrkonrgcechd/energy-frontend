<script lang="ts" setup>
import DoughnutChart from "@/components/DoughnutChart.vue";
import Card from "@/components/Card.vue";
import { getColors, getLabels } from "@/utils";
</script>

<template>
  <div class="h-screen grid grid-cols-3 grid-rows-2 bg-gray-50 p-8">
    <Card title="кВт в месяц по типу">
      <DoughnutChart
        :colors="getColors"
        :labels="getLabels"
        :data="[25_000, 70_600, 10_200]"
      />
    </Card>
  </div>
</template>
