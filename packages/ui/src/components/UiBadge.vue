<script setup lang="ts">
import { cn } from '../lib/utils';

withDefaults(defineProps<{ tone?: 'blue' | 'green' | 'amber' | 'slate'; class?: string }>(), {
  tone: 'slate',
});
</script>

<template>
  <span
    :class="
      cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold',
        {
          'bg-blue-50 text-blue-700': tone === 'blue',
          'bg-emerald-50 text-emerald-700': tone === 'green',
          'bg-amber-50 text-amber-700': tone === 'amber',
          'bg-slate-100 text-slate-600': tone === 'slate',
        },
        $props.class,
      )
    "
    ><slot
  /></span>
</template>
