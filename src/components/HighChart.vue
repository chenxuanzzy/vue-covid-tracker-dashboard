<template>
  <div>
    <highcharts :options="chartOptions" :callback="dealData"></highcharts>
  </div>
</template>
<script>
import dayjs from "dayjs";
const chart = {
  chart: {
    type: "column",
  },
  title: {
    text: "Global",
  },
  yAxis: {
    title: {
      text: "amount",
    },
  },
  xAxis: {
    categories: [],
    crosshair: true,
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding-right:20px">&#9679;{series.name} </td>' +
      "<td ><span> {point.y:  .1f} </span></td></tr>",
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },
  exporting: { enabled: false },
  series: [],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};
export default {
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  name: "HelloWorld",
  data() {
    return {
      chartOptions: chart,
    };
  },
  methods: {
    dealData() {
      let color = [
        "#C90076",
        "#E50017",
        "#4287f5",
        "#626369",
        "#28292b",
        "#24b524",
      ];
      let arr = [];
      let name = Object.keys(this.data.Global);
      let data = Object.values(this.data.Global);
      data.splice(6, 1);
      for (let i = 0; i < color.length; i++) {
        let globalData = {
          color: color[i],
          name: name[i],
          data: [data[i]],
        };
        arr.push(globalData);
      }
      let date = dayjs(this.data.Date).format("YYYY-MM-DD");
      chart.xAxis.categories.push(date);
      chart.series = arr;
    },
  },
};
</script>

<style>
.highcharts-container {
  width: 400px;
  height: 200px;
  border: 1px solid #ddd;
  margin: auto;
}
</style>
