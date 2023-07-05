<template>
  <Transition name="message-toast">
    <div
      class="max-w-full min-h-screen absolute top-0 left-0 right-0 bg-black/20 overflow-hidden z-20 flex justify-center items-center"
      v-show="openMessage"
    >
      <div class="w-[450px] h-[250px] bg-white shadow-md rounded-sm flex flex-col">
        <div class="flex items-center justify-between border-b px-3 py-2">
          <h5 class="mb-0 font-medium text-lg">Message</h5>
          <button class="p-2 text-xl hover:text-black transition" @click="$emit('handleCloseMessage')">
            <font-awesome-icon icon="xmark"></font-awesome-icon>
          </button>
        </div>
        <div class="w-full h-full bg-transparent px-3 py-2 flex items-center justify-center">
            <p class="text-center text-xl text-red-500">{{ v.MESSAGE_TOAST.INFORMATION_TOAST.toString() }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import * as v from '../utils/index'
defineProps(["openMessage"]);
defineEmits(["handleCloseMessage"]);
</script>

<style scoped>
.message-toast-enter-active, .message-toast-leave-active {
    transition: all .3s ease-in-out;
}
.message-toast-enter-from, .message-toast-leave-to {
    opacity: 0;
}
</style>
