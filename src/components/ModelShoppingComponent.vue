<template>
  <Transition name="model-screen">
    <div
      class="max-w-full min-h-screen absolute top-0 right-0 left-0 bg-black/20 z-10"
      v-if="showModel"
    >
      <section
        class="w-[400px] min-h-screen fixed right-0 top-0 z-20 bg-white model shadow px-3"
      >
        <div
          class="w-full h-14 flex items-center justify-between border-b border-black/5"
        >
          <h4 class="mb-0 font-roboto">Cart</h4>
          <button
            type="button"
            class="text-xl hover:text-black"
            @click="$emit('showModelRecord')"
          >
            <font-awesome-icon icon="xmark"></font-awesome-icon>
          </button>
        </div>
        <div class="mx-auto font-roboto">
          <div class="flex items-center justify-between">
            <h5 class="mb-0 pt-4 pb-3">Products</h5>
            <button class="text-xl relative value">
              <span
                class="text-xs absolute w-[180px] right-[150%] p-1 bottom-[50%] rtooltip border transition"
                >Click to remove all items!</span
              >
              <font-awesome-icon icon="minus"></font-awesome-icon>
            </button>
          </div>
          <div
            class="w-full h-[450px] overflow-y-auto overflow-x-hidden mb-3 pb-4 border-b"
          >
            <DetailModelCartComponent
              v-for="item in t.getValueItem.value"
              :key="item.id"
              :v="item.selectQuantity"
              :heading="item.heading"
              :body="item.title"
              :image="item.url"
            />
          </div>
        </div>
        <div
          class="h-[40px] w-full mt-auto bg-red-500 rounded-sm hover:bg-red-600"
        >
          <button
            class="w-full h-full text-white font-semibold transition delay-150"
            @click="openMessage = true"
          >
            Payment
          </button>
        </div>
        <div class="w-full">
          <p class="w-[1px] mx-auto text-center h-[40px] bg-black/20 mb-0"></p>
          <p class="text-center mb-0 border p-2 bg-gray-400">
            If you are not logged in, please login below here
          </p>
          <p class="w-[1px] mx-auto text-center h-[40px] bg-black/20 mb-0"></p>
          <p class="mx-auto text-center mb-0">x</p>
          <p class="w-[1px] mx-auto text-center h-[40px] bg-black/20 mb-0"></p>
          <div class="w-full flex items-center gap-2">
            <button
              class="w-full bg-sky-600 rounded-sm font-semibold text-white p-2 hover:bg-sky-700 transition"
              @click="() => $router.push('/login')"
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  </Transition>
  <MessageDetail
    :openMessage="openMessage"
    @handleCloseMessage="openMessage = false"
  />
</template>

<script setup lang="ts">
import { inject, ref, Ref } from "vue";
import DetailModelCartComponent from "../components/DetailModelCartComponent.vue";
import MessageDetail from "../components/MessageDetail.vue";
defineEmits(["showModelRecord"]);
defineProps<{ showModel: boolean }>();

const openMessage: Ref<boolean> = ref(false);
const t: any = inject<
  {
    id: number;
    heading: string;
    title: string;
    url: string;
    quantity: number;
    selectQuantity: number;
  }[]
>("quantityItem");
</script>

<style scoped>
.model-screen-enter-active,
.model-screen-leave-active {
  transition: opacity 0.3s linear;
}

.model-screen-enter-active .model,
.model-screen-leave-active .model {
  transition: transform 0.3s ease-in-out 0.2s;
}

.model-screen-leave-active {
  transition-delay: 0.5s;
}

.model-screen-leave-to .model,
.model-screen-enter-from .model {
  transform: translateX(100%);
}
.model-screen-enter-from,
.model-screen-leave-to {
  opacity: 0;
}

.value:hover .rtooltip {
  visibility: visible;
  opacity: 1;
}

.rtooltip {
  visibility: hidden;
  opacity: 0;
}
</style>
