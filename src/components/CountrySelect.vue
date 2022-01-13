<template>
  <div>
    <select
      @change="onChange"
      v-model="selected"
      class="form-select mt-10 block w-full border p-3"
    >
      <option value="0">Select Country</option>
      <option
        :value="country.ID"
        v-for="(country, index) in countries"
        :key="index"
      >
        {{ country.Country }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "CountrySelect",
  props: ["countries"],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onChange() {
      let selected = this.selected;
      const country = this.countries.find((item) => {
        return item.ID === this.selected;
      });
      let highchartData = this.chgData(country);
      this.$emit("get-country", { country, selected, highchartData });
    },
    chgData(country) {
      console.log(country);
      // let color = [
      //   "#C90076",
      //   "#E50017",
      //   "#4287f5",
      //   "#626369",
      //   "#28292b",
      //   "#24b524",
      // ];
      // let arr = [];
      // let globalData = {};
      // let name = Object.keys(country);
      // name.splice(0, 4);
      // for (let [key, value] of Object.entries(country)) {
      //   // const element = array[];
      //   globalData = {};
      // }
      // console.log(name);
      //  = Object.values(country);
      // for (let i = 0; i < color.length; i++) {
      //   globalData = {
      //     color: color[i],
      //     name: name[i],
      //     data: [data[i]],
      //   };
      //   arr.push(globalData);
      // }
    },
  },
};
</script>
