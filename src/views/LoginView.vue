<template>
  <div
    class="max-w-full min-h-screen bg-slate-400/60 flex items-center justify-center"
  >
    <div class="w-[400px] h-auto py-3 shadow bg-white overflow-hidden relative">
      <div
        class="absolute top-0 right-0 w-5 p-2 h-5 rounded-bl-md bg-red-200 flex items-center justify-center text-white cursor-pointer"
        @click="() => $router.replace({ name: 'home', path: '/' })"
      >
        <font-awesome-icon
          icon="xmark"
          class="hover:text-black transition"
        ></font-awesome-icon>
      </div>
      <div
        :class="`flex flex-nowrap transition-all ${
          statusChange ? '-translate-x-full' : 'translate-x-0'
        }`"
      >
        <div class="w-[400px] h-[550px] flex-shrink-0">
          <h3 class="mb-0 text-center text-3xl pt-2 py-5 font-semibold">
            {{ TEXT_FORM.LOGIN_FORM.NAME }}
          </h3>
          <form action="#" class="px-4">
            <div class="mb-4">
              <label for="user-name">{{ TEXT_FORM.LABEL.LABEL_USER }}</label>
              <input
                type="text"
                id="user-name"
                placeholder="@...user-name"
                autocomplete="false"
                class="w-full outline-none border p-2 rounded-sm"
              />
              <span class="text-sm text-red-600">Please check input type</span>
            </div>
            <div class="mb-6">
              <label for="password">{{ TEXT_FORM.LABEL.LABEL_PASSWORD }}</label>
              <input
                type="password"
                id="password"
                placeholder="@...password"
                autocomplete="false"
                class="w-full outline-none border p-2 rounded-sm"
              />
              <span class="text-sm text-red-600">Please check input type</span>
            </div>
            <div class="w-full mt-auto">
              <button
                type="submit"
                class="w-full p-2 my-3 bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
              >
                Submit
              </button>
              <button
                type="button"
                class="w-full p-2 border-sky-700/75 border text-black font-medium transition"
                @click="statusChange = true"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div class="w-[400px] h-[550px] flex-shrink-0">
          <h3 class="mb-0 text-center text-3xl pt-2 py-5 font-semibold">
            {{ TEXT_FORM.REGISTER_NAME.NAME }}
          </h3>
          <form action="#" class="px-4">
            <div class="mb-4">
              <label for="user-name">{{ TEXT_FORM.LABEL.LABEL_USER }}</label>
              <input
                type="text"
                id="user-name"
                placeholder="@...user-name"
                autocomplete="false"
                class="w-full outline-none border p-2 rounded-sm"
              />
              <span class="text-sm text-red-600">Please check input type</span>
            </div>
            <div class="mb-4">
              <label for="password">{{ TEXT_FORM.LABEL.LABEL_PASSWORD }}</label>
              <input
                type="text"
                id="password"
                placeholder="@...password"
                autocomplete="false"
                class="w-full outline-none border p-2 rounded-sm"
              />
              <span class="text-sm text-red-600">Please check input type</span>
            </div>
            <div class="mb-6">
              <label for="confirm">{{
                `Confirm ${TEXT_FORM.LABEL.LABEL_PASSWORD} `
              }}</label>
              <input
                type="text"
                id="confirm"
                placeholder="@...confirm password"
                autocomplete="false"
                class="w-full outline-none border p-2 rounded-sm"
              />
              <span class="text-sm text-red-600">Please check input type</span>
            </div>
            <div class="w-full mt-auto">
              <button
                type="submit"
                class="w-full p-2 my-3 bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
              >
                Submit
              </button>
              <p class="text-sm text-center">
                If you have account! Login at
                <span
                  class="underline text-sky-400 cursor-pointer"
                  @click="statusChange = false"
                  >here</span
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { TEXT_FORM } from "../utils";
const statusChange: Ref<boolean> = ref(false);
</script>
