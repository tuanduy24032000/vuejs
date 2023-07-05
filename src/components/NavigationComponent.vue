<template>
  <nav
    class="max-w-full h-[60px] flex justify-between items-center px-10 border-b"
  >
    <h1 class="uppercase font-semibold mb-0">Logo</h1>
    <div class="flex items-center gap-10">
      <ul class="m-0 p-0">
        <li class="inline-block mx-3">
          <RouterLink
            to="/"
            class="no-underline text-base font-normal text-slate-600 active:text-blue-500"
            >Home</RouterLink
          >
        </li>
        <li class="inline-block mx-3">
          <RouterLink
            to="contact"
            class="no-underline text-base font-normal text-slate-600"
            >Contact</RouterLink
          >
        </li>
        <li class="inline-block mx-3">
          <RouterLink
            to="table"
            class="no-underline text-base font-normal text-slate-600"
            >Table</RouterLink
          >
        </li>
        <li class="inline-block mx-3">
          <RouterLink
            to="payment"
            class="no-underline text-base font-normal text-slate-600"
            >Payment</RouterLink
          >
        </li>
      </ul>
      <button
        type="button"
        class="text-xl text-black relative z-0"
        @click="showModel = true"
      >
        <font-awesome-icon icon="cart-shopping"></font-awesome-icon>
        <span
          class="w-5 h-5 m-0 p-0 text-sm font-roboto bg-red-400 text-white absolute -top-3 -right-3 rounded-full flex items-center justify-center -z-10"
          >{{ props.getValueItem?.length }}</span
        >
      </button>
    </div>
  </nav>
  <ModelShoppingComponent
    :show-model="showModel"
    @show-model-record="showModel = false"
  />
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import ModelShoppingComponent from "./ModelShoppingComponent.vue";
const props = defineProps({
  getValueItem: Array<{
    id: number;
    heading: string;
    title: string;
    url: string;
    quantity: number;
  }>,
});

const showModel: Ref<boolean> = ref(false);
</script>
