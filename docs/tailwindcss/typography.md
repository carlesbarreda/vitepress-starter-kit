<script setup lang="ts">
import { TYPOGRAPHY } from "@/design.config";
const getStyle = (item) => `font-size: ${item.size}; font-weight: ${item.weight};`;
</script>

# Typography

<div class="w-full" v-for="item in TYPOGRAPHY.scale.map((item) => item)">
    <div class="mt-6 border-t py-4">
        <p :style="getStyle(item)">Hello world</p>
        <div class="flex gap-6 text-slate-500 font-mono">
            <span>{{ item.name }}</span>
            <span>weight: {{ item.weight }}</span>
            <span>size: {{ item.size }}</span>
        </div>
    </div>
</div>
