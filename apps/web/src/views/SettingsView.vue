<template>
  <div class="max-w-3xl">
    <h2 class="text-2xl font-bold">设置</h2>
    <p class="mt-2 text-sm text-slate-500">管理工作区偏好和通知设置。</p>
    <div class="mt-8 space-y-4">
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 class="font-semibold">工作区信息</h3>
        <label class="mt-5 block text-sm text-slate-500"
          >工作区名称1<input
            class="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
            value="Flowboard 团队"
        /></label>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 class="font-semibold">通知</h3>
        <label class="mt-5 flex items-center justify-between text-sm"
          ><span>任务截止提醒</span><input type="checkbox" checked class="size-4 accent-brand-500"
        /></label>
      </div>
    </div>
  </div>
</template>
