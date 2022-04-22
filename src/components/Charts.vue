<template>
  <ve-line :data="chartData" :setting="chartSettings"></ve-line>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      stack: { 用户: ["下单用户", "下单率"] },
      area: true,
    };
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1.1", 访问用户: 123, 下单用户: 1000, 下单率: 0.1 },
          { 日期: "1.2", 访问用户: 1223, 下单用户: 1452, 下单率: 0.2 },
          { 日期: "1.3", 访问用户: 2123, 下单用户: 1786, 下单率: 0.24 },
          { 日期: "1.4", 访问用户: 4123, 下单用户: 1942, 下单率: 0.28 },
          { 日期: "1.5", 访问用户: 3123, 下单用户: 2045, 下单率: 0.37 },
          { 日期: "1.6", 访问用户: 5123, 下单用户: 2245, 下单率: 0.4 },
        ],
      },
    };
  },
};
</script>

<style>
</style>