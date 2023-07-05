<template>
  <section class="w-full flex flex-col p-3 rounded-sm border">
    <div class="pb-2">
      <div class="w-full h-[200px]">
        <slot name="heading"></slot>
      </div>
    </div>
    <div class="pb-2 flex flex-col">
      <slot name="body"></slot>
    </div>
    <div class="mt-auto flex items-center gap-2">
      <RouterLink
        :to="{ name: 'product', params: { productId: id } }"
        class="bg-sky-800 w-full no-underline flex justify-center text-white cursor-pointer rounded-sm border-none font-medium outline-none font-roboto hover:bg-sky-900 transition px-3 py-2 border"
      >
        About me
      </RouterLink>
      <button
        type="button"
        class="bg-transparent w-full cursor-pointer text-black rounded-sm border-none font-medium outline-none font-roboto transition px-3 py-2 border"
        @click="$emit('handleShowToast')"
      >
        Add to cart
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(["handleShowToast"]);
defineProps(["id"]);
</script>
