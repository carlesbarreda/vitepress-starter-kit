<script setup lang="ts">
const props = defineProps<{
  team: HockeyTeam
}>()
</script>

<template>
  <li class="py-4 flex">
    <img class="h-10 w-10 rounded-full" :src="props.team.logo" alt="" />
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-900">{{ props.team.name }}</p>
      <p class="text-sm text-gray-500">{{ props.team.city }}</p>
    </div>
  </li>
</template>
