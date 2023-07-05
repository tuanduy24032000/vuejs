<template>
  <main class="px-3 pb-3 mx-auto w-3/5 transition-all font-roboto">
    <div class="py-4">
      <div class="flex items-center justify-between mt-3">
        <div class="flex flex-col">
          <h3 class="mb-0 font-semibold">Detail</h3>
          <h5 class="text-base mb-0">Information of product</h5>
        </div>
        <RouterLink to="/" class="text-xl text-black/80 hover:text-black">
          <font-awesome-icon icon="backward"></font-awesome-icon>
        </RouterLink>
      </div>
      <div class="w-full h-full mt-5 mx-auto p-5 border rounded-lg shadow">
        <img
          src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="image-details"
          class="w-full h-full object-cover shadow rounded-lg"
        />
      </div>
      <h5 class="text-xl font-medium uppercase py-5">
        Title of heading product
      </h5>
      <p class="font-roboto leading-7 py-2 px-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p class="font-roboto leading-7 py-2 px-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p class="font-roboto leading-7 py-2 px-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="w-full">
      <Bar :data="chartData" />
      <h5 class="text-center mt-2 text-red-500">
        Statistical chart of the number of products sold in recent months
      </h5>
    </div>
  </main>
</template>

<script lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March", "June"],
        datasets: [
          {
            label: "Sale",
            backgroundColor: "#f87979",
            fill: true,
            data: [40, 20, 12, 100],
          },
          {
            label: "UnSale",
            backgroundColor: "#007979",
            data: [10, 30, 15, 90],
          },
        ],
      },
    };
  },
};
</script>
