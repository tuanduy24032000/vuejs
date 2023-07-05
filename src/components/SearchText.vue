<!-- Search text for check of items when it's find anywhere at home vue -->
<template>
  <div
    class="flex justify-center w-1/2 mx-auto h-[45px] border my-10 font-roboto"
  >
    <input
      type="text"
      placeholder="@...Search"
      class="w-full h-full py-2 px-3 outline-none"
      @input="(value) => emit('handle', value)"
    />
  </div>
</template>

<script setup lang="ts">
// Imported
const emit = defineEmits(["handle"]);
</script>
