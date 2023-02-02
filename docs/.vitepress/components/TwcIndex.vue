<script setup lang="ts">
import { ref } from "vue";

const isOn = ref(false);
const isOpen = ref(false);

</script>

<template>

  <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
  <span aria-checked="false" class="bg-gray-200 relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline" role="checkbox" tabindex="0">
    <!-- On: "translate-x-5", Off: "translate-x-0" -->
    <span aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"></span>
  </span>
  
  <span
    x-data="{ isOn: false }"
    @click="isOn = !isOn"
    :aria-checked="isOn"
    :class="{'bg-indigo-600': isOn, 'bg-gray-200': !isOn }"
    class="bg-gray-200 relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
    role="checkbox"
    tabindex="0"
  >
    <span
      aria-hidden="true"
      :class="{'translate-x-5': isOn, 'translate-x-0': !isOn }"
      class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
    ></span>
  </span>
  
  <div class="relative ...">
    <button type="button" class="...">
      Options
    </button>
  
    <!--
      Show/hide this element based on the dropdown state
  
      Entering: "transition ease-out duration-100 transform"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Closing: "transition ease-in duration-75 transform"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
      <div class="rounded-md bg-white shadow-xs">
        <!-- Snipped  -->
      </div>
    </div>
  </div>
  <div x-data="{ isOpen: false }" class="relative ...">
    <button type="button" @click="isOpen = !isOpen" class="...">
      Options
    </button>
  
    <div
      x-show="isOpen"
      x-transition:enter="transition ease-out duration-100 transform"
      x-transition:enter-start="opacity-0 scale-95"
      x-transition:enter-end="opacity-100 scale-100"
      x-transition:leave="transition ease-in duration-75 transform"
      x-transition:leave-start="opacity-100 scale-100"
      x-transition:leave-end="opacity-0 scale-95"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
    >
      <div class="rounded-md bg-white shadow-xs">
        <!-- Snipped  -->
      </div>
    </div>
  </div>
  
  </template>
  