<script setup lang="ts">
import { computed } from 'vue';
import {
  ArrowUpRight,
  Check,
  Circle,
  Clock3,
  MoreHorizontal,
  Target,
  TrendingUp,
} from 'lucide-vue-next';
import { UiBadge } from '@vue-ci-cd/ui';
import { useProjectStore, type TaskStatus } from '../stores/project';

const store = useProjectStore();
const tabs: Array<'全部' | TaskStatus> = ['全部', '进行中', '待开始', '已完成'];
const progress = computed(() => Math.round((store.completedCount / store.tasks.length) * 100));
</script>

<template>
  <section class="grid gap-6 xl:grid-cols-[1fr_320px]">
    <div>
      <div class="grid gap-4 sm:grid-cols-3">
        <div class="stat-card">
          <div class="flex items-center justify-between">
            <p>进行中的任务</p>
            <div class="icon-wrap bg-blue-50 text-brand-500">
              <Clock3 :size="18" />
            </div>
          </div>
          <strong>{{ store.tasks.filter((t) => t.status === '进行中').length }}</strong
          ><span class="trend"><TrendingUp :size="14" />较上周 +12%</span>
        </div>
        <div class="stat-card">
          <div class="flex items-center justify-between">
            <p>本周已完成</p>
            <div class="icon-wrap bg-emerald-50 text-emerald-500">
              <Check :size="18" />
            </div>
          </div>
          <strong>{{ store.completedCount + 8 }}</strong
          ><span class="trend"><TrendingUp :size="14" />较上周 +8%</span>
        </div>
        <div class="stat-card">
          <div class="flex items-center justify-between">
            <p>团队完成率</p>
            <div class="icon-wrap bg-violet-50 text-violet-500">
              <Target :size="18" />
            </div>
          </div>
          <strong>{{ progress + 68 }}%</strong
          ><span class="text-xs text-slate-400">保持良好势头</span>
        </div>
      </div>
      <div class="mt-7 rounded-2xl border border-slate-200 bg-white">
        <div
          class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4"
        >
          <div>
            <h2 class="font-bold">我的任务</h2>
            <p class="mt-1 text-xs text-slate-400">聚焦今天最重要的工作</p>
          </div>
          <div class="flex gap-1 rounded-lg bg-slate-100 p-1">
            <button
              v-for="tab in tabs"
              :key="tab"
              class="rounded-md px-3 py-1.5 text-xs"
              :class="
                store.filter === tab
                  ? 'bg-white font-semibold text-brand-600 shadow-sm'
                  : 'text-slate-500'
              "
              @click="store.filter = tab"
            >
              {{ tab }}
            </button>
          </div>
        </div>
        <div class="divide-y divide-slate-100">
          <div
            v-for="task in store.visibleTasks"
            :key="task.id"
            class="flex items-center gap-4 px-5 py-4"
          >
            <div
              class="grid size-9 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-400"
            >
              <Check v-if="task.status === '已完成'" :size="17" class="text-emerald-500" /><Circle
                v-else
                :size="17"
              />
            </div>
            <div class="min-w-0 flex-1">
              <p
                class="truncate text-sm font-semibold"
                :class="task.status === '已完成' && 'text-slate-400 line-through'"
              >
                {{ task.title }}
              </p>
              <p class="mt-1 text-xs text-slate-400">{{ task.project }} · {{ task.owner }}</p>
            </div>
            <UiBadge
              :tone="task.priority === '高' ? 'amber' : task.status === '已完成' ? 'green' : 'blue'"
              >{{ task.priority }}优先级</UiBadge
            ><span class="hidden w-16 text-right text-xs text-slate-400 sm:block">{{
              task.due
            }}</span
            ><button class="text-slate-400">
              <MoreHorizontal :size="18" />
            </button>
          </div>
        </div>
        <div v-if="!store.visibleTasks.length" class="p-10 text-center text-sm text-slate-400">
          没有匹配的任务
        </div>
        <div class="border-t border-slate-100 px-5 py-3 text-center">
          <button class="text-xs font-semibold text-brand-600">
            查看全部任务 <ArrowUpRight class="inline" :size="14" />
          </button>
        </div>
      </div>
    </div>
    <aside class="space-y-6">
      <div class="rounded-2xl bg-brand-500 p-6 text-white">
        <p class="text-sm font-semibold text-blue-100">本周目标</p>
        <div class="mt-5 flex items-end justify-between">
          <strong class="text-4xl">{{ progress + 68 }}%</strong
          ><span class="text-xs text-blue-100">17 / 25 个任务</span>
        </div>
        <div class="mt-4 h-2 rounded-full bg-white/20">
          <div
            class="h-2 rounded-full bg-white"
            :style="{ width: `${Math.min(progress + 68, 100)}%` }"
          />
        </div>
        <p class="mt-4 text-xs leading-5 text-blue-100">你已完成大部分目标，继续保持！</p>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <div class="flex items-center justify-between">
          <h2 class="font-bold">项目概览</h2>
          <button class="text-xs text-brand-600">全部</button>
        </div>
        <div class="mt-5 space-y-5">
          <div>
            <div class="flex justify-between text-xs">
              <span class="font-semibold">Web 平台</span><span class="text-slate-400">68%</span>
            </div>
            <div class="mt-2 h-1.5 rounded-full bg-slate-100">
              <div class="h-1.5 w-[68%] rounded-full bg-brand-500" />
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs">
              <span class="font-semibold">增长实验</span><span class="text-slate-400">42%</span>
            </div>
            <div class="mt-2 h-1.5 rounded-full bg-slate-100">
              <div class="h-1.5 w-[42%] rounded-full bg-violet-400" />
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs">
              <span class="font-semibold">团队协作</span><span class="text-slate-400">85%</span>
            </div>
            <div class="mt-2 h-1.5 rounded-full bg-slate-100">
              <div class="h-1.5 w-[85%] rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<style scoped>
.stat-card {
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  background: #fff;
  padding: 1.25rem;
}
.stat-card p {
  font-size: 0.75rem;
  color: #94a3b8;
}
.stat-card strong {
  display: block;
  margin-top: 1rem;
  font-size: 1.875rem;
  letter-spacing: -0.025em;
}
.icon-wrap {
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.625rem;
}
.trend {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
  font-size: 0.7rem;
  color: #10b981;
}
</style>
