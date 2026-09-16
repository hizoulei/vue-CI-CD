<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import {
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  FolderKanban,
  LayoutDashboard,
  Plus,
  Search,
  Settings,
  Sparkles,
  Users,
} from 'lucide-vue-next';
import { UiButton } from '@vue-ci-cd/ui';
import { useProjectStore } from './stores/project';

const store = useProjectStore();
const showComposer = ref(false);
const newTask = ref('');
function createTask() {
  if (newTask.value.trim()) store.addTask(newTask.value.trim());
  newTask.value = '';
  showComposer.value = false;
}
</script>

<template>
  <div class="min-h-screen bg-[#f7f9fc] text-slate-800">
    <aside
      class="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white px-4 py-5 lg:flex lg:flex-col"
    >
      <div class="mb-8 flex items-center gap-3 px-3">
        <div class="grid size-9 place-items-center rounded-xl bg-brand-500 text-white">
          <Sparkles :size="18" />
        </div>
        <div>
          <p class="text-sm font-bold">Flowboard</p>
          <p class="text-[11px] text-slate-400">团队工作台</p>
        </div>
      </div>
      <nav class="space-y-1 text-sm">
        <RouterLink to="/" class="nav-item"><LayoutDashboard :size="18" />概览</RouterLink
        ><a class="nav-item"><FolderKanban :size="18" />项目</a
        ><a class="nav-item"
          ><CheckCircle2 :size="18" />我的任务
          <span class="ml-auto rounded-full bg-blue-50 px-2 py-0.5 text-xs text-brand-600"
            >12</span
          ></a
        ><a class="nav-item"><Users :size="18" />团队成员</a
        ><a class="nav-item"><BarChart3 :size="18" />分析</a>
      </nav>
      <div class="mt-auto space-y-1 text-sm">
        <RouterLink to="/settings" class="nav-item"><Settings :size="18" />设置</RouterLink
        ><a class="nav-item"><CircleHelp :size="18" />帮助中心</a>
        <div class="mt-5 flex items-center gap-3 border-t border-slate-100 px-3 pt-5">
          <div
            class="grid size-9 place-items-center rounded-full bg-amber-100 text-sm font-bold text-amber-700"
          >
            林
          </div>
          <div class="min-w-0">
            <p class="truncate text-xs font-semibold">林晓</p>
            <p class="truncate text-[11px] text-slate-400">产品设计师</p>
          </div>
          <ChevronDown class="ml-auto text-slate-400" :size="16" />
        </div>
      </div>
    </aside>
    <main class="lg:ml-64">
      <header
        class="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-10"
      >
        <div>
          <p class="text-sm text-slate-400">周二，2025 年 9 月 16 日</p>
          <h1 class="mt-1 text-xl font-bold tracking-tight">早上好，林晓 <span>👋</span></h1>
        </div>
        <div class="flex items-center gap-3">
          <button
            class="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-500 md:flex"
          >
            <Search :size="16" />搜索<span class="rounded bg-slate-100 px-1.5 text-xs"
              >⌘ K</span
            ></button
          ><button
            class="relative grid size-10 place-items-center rounded-lg border border-slate-200 text-slate-500"
          >
            <Bell :size="18" /><span
              class="absolute right-2 top-2 size-1.5 rounded-full bg-brand-500"
            /></button
          ><UiButton @click="showComposer = true"><Plus :size="17" />新建任务</UiButton>
        </div>
      </header>
      <div class="mx-auto max-w-7xl p-6 lg:p-10">
        <RouterView />
        <div
          v-if="showComposer"
          class="fixed inset-0 z-20 grid place-items-center bg-slate-900/20 p-4"
        >
          <form
            class="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            @submit.prevent="createTask"
          >
            <h2 class="text-lg font-bold">创建新任务</h2>
            <input
              v-model="newTask"
              autofocus
              class="mt-5 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-brand-500 focus:ring-2"
              placeholder="例如：准备周会演示"
            />
            <div class="mt-6 flex justify-end gap-2">
              <UiButton type="button" variant="secondary" @click="showComposer = false"
                >取消</UiButton
              ><UiButton type="submit">创建任务</UiButton>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.625rem;
  padding: 0.65rem 0.75rem;
  color: #64748b;
}
.nav-item:hover,
.router-link-active {
  background: #eef8ff;
  color: #1769ba;
  font-weight: 600;
}
</style>
