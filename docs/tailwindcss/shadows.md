<script setup lang="ts">
import { SHADOWS } from "@/design.config";
</script>

# Shadows

<div class="component-preview">
  <div class="inline-grid grid-cols-2 gap-16">
    <template v-for="item in SHADOWS.types.map((item) => item)">
        <div
            class="p-2 bg-white rounded-md text-slate-500 text-right pt-16 pl-24 font-mono"
            :style="`box-shadow: ${item.value}`"
        >
            {{ item.name }}
        </div>
    </template>
  </div>
</div>
<pre class="box-code bg-slate-800 text-white">
  <template v-for="item in SHADOWS.types.map((item) => item)">
    {{ item.name }}: {{ item.value }}
  </template>
</pre>
