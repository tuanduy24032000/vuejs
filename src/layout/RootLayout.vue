<template>
  <div class="max-w-full h-auto relative font-roboto">
    <NavigationComponent :getValueItem="getValueItem" />
    <RouterView />
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, provide, ref } from "vue";
import NavigationComponent from "../components/NavigationComponent.vue";


export default defineComponent({
  components: {
    NavigationComponent,
  },
  setup() {
    const getValueItem: Ref<
      {
        id: number;
        heading: string;
        title: string;
        url: string;
        quantity: number;
        selectQuantity: number;
      }[]
    > = ref([]);
    const numberOfProducts: Ref<number> = ref(1);

    const handleActiveValue = (v: {
      id: number;
      heading: string;
      title: string;
      url: string;
      quantity: number;
    }): void => {
      const t = {
        id: v.id,
        heading: v.heading,
        title: v.title,
        url: v.url,
        quantity: v.quantity,
        selectQuantity: 1,
      };
      if (getValueItem.value.length === 0) {
        getValueItem.value.push(t);
      } else {
        getValueItem.value = getValueItem.value.map((vd) => {
          if (v.id === vd.id) {
            return {
              ...vd,
              selectQuantity: vd.selectQuantity + 1,
            };
          }
          return vd;
        });
      }
      if (
        getValueItem.value.length >= 1 &&
        !getValueItem.value.some((t) => t.id === v.id)
      ) {
        getValueItem.value.push(t);
      }
    };

    provide("quantityItem", { getValueItem, handleActiveValue });
    provide("numberOfProduct", numberOfProducts);
    return { getValueItem };
  },
});
</script>
