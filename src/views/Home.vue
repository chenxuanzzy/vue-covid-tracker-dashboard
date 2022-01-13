<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />
    <CountrySelect @get-country="getCountryData" :countries="countries" />
    <HighChart class="highchart" :data="orgData" />
    <!-- <button
      @click="clearCountryData"
      v-if="stats.Country"
      class="
        bg-green-700
        text-white
        rounded
        p-3
        mt-10
        focus:outline-none
        hover:bg-green-600
      "
    >
      Clear Country
    </button> -->
  </main>
  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-gray-500 text-3xl mt-10 mb-6">getData</div>
    <img :src="loadingImage" class="w-24 m-auto" alt="" />
  </main>
</template>

<script>
import DataTitle from "@/components/DataTitle";
import DataBoxes from "@/components/DataBoxes";
import CountrySelect from "@/components/CountrySelect";
import HighChart from "@/components/HighChart";
import axios from "axios";

// Vue.forceUpdate();
export default {
  name: "Home",
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
    HighChart,
  },
  data() {
    return {
      loading: true,
      title: "Global",
      dataDate: "",
      stats: {},
      countries: [],
      loadingImage: require("../assets/hourglass.gif"),
      orgData: {},
    };
  },
  methods: {
    async fetchCovidData() {
      await axios
        .get("https://api.covid19api.com/summary")
        .then((res) => {
          console.log(res);
          this.stats = res.data.Global;
          this.dataDate = res.data.Date;
          this.countries = res.data.Countries;
          this.loading = false;
          this.orgData = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCountryData(data) {
      let { country, selected } = data;
      if (selected === "0") {
        this.fetchCovidData();
        this.title = "Global";
      } else {
        this.stats = country;
        this.title = country.Country;
      }
    },
    // async clearCountryData() {
    //   this.loading = true;
    //   const data = await this.fetchCovidData();
    //   this.title = "Global";
    //   this.stats = data.Global;
    //   this.loading = false;
    // },
  },
  async created() {
    await this.fetchCovidData();
  },
};
</script>

<style scope>
.highchart {
  padding: 20px;
}
</style>
