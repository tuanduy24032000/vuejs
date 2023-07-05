<template>
  <main class="px-3 mx-auto w-3/4 transition-all h-full">
    <SearchText @handle="searchHandle" />
    <h4 class="text-base py-5 mb-0">
      You have {{ selectedValue }} items. 0 items is selected.
    </h4>
    <div
      class="grid grid-cols-4 gap-3 overflow-x-hidden h-[600px] py-3 overflow-y-auto"
    >
      <ListViewComponent
        @handle-show-toast="() => handleShowToast(item.id)"
        v-for="item in data"
        :key="item.id"
        :id = "item.id"
      >
        <template #heading>
          <img
            :src="`${
              item.url
                ? item.url
                : 'https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
            }`"
            class="w-full h-full object-cover"
          />
        </template>
        <template #body>
          <h5 class="text-xl uppercase font-medium">{{ item.heading }}</h5>
          <p class="break-words whitespace-normal">
            {{ item.title }}
          </p>
        </template>
      </ListViewComponent>
    </div>
    <ShowToast :show-toast="showToast" @handle-show-toast="handleShowToast">
      <template #title>
        <p
          :class="`mb-0 py-2 ${
            messageShowToast.clor ? 'text-red-700' : 'text-green-700'
          }`"
        >
          {{ messageShowToast.message }}
        </p>
      </template>
    </ShowToast>
  </main>
</template>

<script setup lang="ts">
// Imported
import { Ref, computed, inject, reactive, ref, watch } from "vue";
import SearchText from "../components/SearchText.vue";
import ListViewComponent from "../components/ListViewComponent.vue";
import dataFetch from "../json/index.json";
import ShowToast from "../layout/ShowToast.vue";

//Initial value
const value: Ref<number> = ref(0);
const showToast: Ref<boolean> = ref(false);
const searchValue: Ref<string> = ref("");
const messageShowToast = reactive<{
  message: string;
  clor: boolean;
}>({
  message: "",
  clor: false,
});

// Inject
const v: any = inject("quantityItem");

// Methods
const handleShowToast = (id: number): void => {
  try {
    data.value.map((item) => {
      if (item.id === id && item.quantity !== 0) {
        showToast.value = !showToast.value;
        v.handleActiveValue(item);
        messageShowToast.message = "Items is added!";
        messageShowToast.clor = false;
      } else if (item.id === id && item.quantity === 0) {
        showToast.value = true;
        messageShowToast.message = "Error when you clicked";
        messageShowToast.clor = true;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const searchHandle = (e: Event) => {
  const el: string = (e.target as HTMLInputElement).value;
  searchValue.value = el;
};
// Computed and watch

watch(showToast, () => {
  if (showToast.value === true) {
    setTimeout(() => {
      showToast.value = false;
    }, 1000);
  }
});

const data = computed(() => {
  return dataFetch.filter((v) =>
    v.heading.toLowerCase().includes(searchValue.value)
  );
});

const selectedValue = computed(() => {
  return (value.value = data.value.length);
});
</script>
