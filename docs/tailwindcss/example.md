---
titleTemplate: TwcIndex CSS
---
<script setup lang="ts">
import TwcHockeyTeamList from "@/components/TwcHockeyTeamList.vue";
import TwcIndex from "@/components/TwcIndex.vue";
const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const teams = [
  {
    id: "001",
    name: "Vancouver Canucks",
    city: "Vancouver",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Vancouver_Canucks_logo.svg"
  },
  {
    id: "002",
    name: "Chicago Blackhawks",
    city: "Chicago",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Chicago_Blackhawks_logo.svg"
  },
  {
    id: "003",
    name: "Detroit Red Wings",
    city: "Detroit",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/Detroit_Red_Wings_logo.svg"
  },
];
</script>

<ul class="divide-y divide-gray-200">
  <li v-for="person in people" :key="person.email" class="py-4 flex">
    <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
      <p class="text-sm text-gray-500">{{ person.email }}</p>
    </div>
  </li>
</ul>

<TwcHockeyTeamList :teams="teams" />

<TwcIndex />
