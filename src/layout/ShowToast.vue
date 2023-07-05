<template>
  <Transition name="container">
    <div
      v-show="props.showToast"
      class="w-full min-h-screen absolute top-0 left-0 bg-black bg-opacity-10"
    >
      <Transition name="section-active">
        <section
          class="w-[500px] mx-auto shadow-lg font-roboto rounded-sm bg-white mt-20 mb-0 px-3 py-2"
        >
          <div class="flex items-center justify-between">
            <h3 class="mb-0 text-xl text-green-700 font-roboto font-semibold">
              Notification
            </h3>
            <button type="button" @click="$emit('handleShowToast')">
              <font-awesome-icon
                icon="fa-solid fa-xmark"
                class="cursor-pointer"
              ></font-awesome-icon>
            </button>
          </div>
          <slot name="title"></slot>
        </section>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface PropsToast {
  showToast: Boolean;
}
defineEmits(["handleShowToast"]);
const props = defineProps<PropsToast>();
</script>
<style scoped>
.container-enter-active, .container-leave-active {
    transition: all .3s linear;
}
.container-enter-from, .container-leave-to {
    opacity: 0;
}

.section-active-enter-active, .section-active-leave-active {
    transition: all .3s linear;
}
.section-active-enter-from {
    opacity: 0;
    transform: scale(0.8);
}
.section-active-enter-to {
    opacity: 1;
    transform: scale(1);
}
.section-active-leave-from {
    opacity: 1;
    transform: scale(1);
}
.section-active-leave-to {
    transform: scale(.8);
}
</style>
