<script setup lang="ts">
import { cva } from 'class-variance-authority';
import { cn } from '../lib/utils';

const variants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-500 text-white shadow-sm hover:bg-brand-600',
        secondary: 'border bg-white text-slate-700 hover:bg-slate-50',
        ghost: 'text-slate-600 hover:bg-slate-100',
      },
      size: { sm: 'h-8 px-3 text-xs', md: 'h-10', lg: 'h-12 px-5' },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
};
const props = withDefaults(defineProps<ButtonProps>(), { variant: 'primary', size: 'md' });
</script>

<template>
  <button :class="cn(variants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </button>
</template>
