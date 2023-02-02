<script setup lang="ts">
import TwcHockeyTeamItem from "@/components/TwcHockeyTeamItem.vue";
const props = defineProps<{
  teams: Array<TwcHockeyTeam>
}>();
</script>

<template>
  <ul class="divide-y divide-gray-200">
    <TwcHockeyTeamItem v-for="team in props.teams" :key="team.id" :team="team"/>
  </ul>
</template>
