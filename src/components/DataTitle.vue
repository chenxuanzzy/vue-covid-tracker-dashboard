<template>
  <div class="text-center">
    <h2 class="text-3xl font-bold">{{ text }}</h2>
    <div class="text-2xl mt-4 mb-10">
      {{ timestamp }}
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "DataTitle",
  props: ["text", "dataDate"],
  data() {
    return {
      time: this.dataDate,
    };
  },
  computed: {
    timestamp() {
      //   let end = "20210101";
      let endDate = dayjs(this.time).format("MMMM D YYYY, h:mm:ss a");
      return endDate;
      //   return this.dataDate;
    },
  },
  created() {
    console.log(this.dataDate);
  },
};
</script>
