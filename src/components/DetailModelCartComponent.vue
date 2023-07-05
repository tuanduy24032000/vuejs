<template>
  <div
    class="w-full h-[100px] border p-2 mt-3 flex justify-between gap-3 overflow-hidden"
  >
    <div class="w-1/3 flex-shrink-0">
      <img :src="image" alt="Shoe" class="w-full h-full rounded-lg object-cover" />
    </div>
    <div class="flex flex-grow">
      <div class="w-full flex-shrink">
        <h5 class="mb-0 capitalize text-black truncate w-[140px] font-medium">{{ heading }}</h5>
        <p class="text-sm truncate w-[140px] mb-0 py-1">
          {{ body }}
        </p>
        <p>
          Price:<span class="font-roboto">${{ changePrice }}</span>
        </p>
      </div>
      <div class="flex flex-row items-start gap-2">
        <button
          class="text-2xl"
          @click="f.numberOfProducts--"
          :disabled="f.numberOfProducts === 1"
        >
          -
        </button>
        <p
          class="text-xl mb-0 w-8 h-8 flex items-center justify-center border rounded"
        >
          {{ f.numberOfProducts }}
        </p>
        <button class="text-2xl" @click="f.numberOfProducts++">+</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
const props = defineProps(["heading", "image", "body", "v"]);

const f = reactive({
  numberOfProducts: props.v,
});

const changePrice = computed(() => {
  return f.numberOfProducts * 299;
});
</script>
