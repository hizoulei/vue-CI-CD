import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export type TaskStatus = '进行中' | '待开始' | '已完成';
export type Task = {
  id: number;
  title: string;
  project: string;
  status: TaskStatus;
  priority: '高' | '中' | '低';
  due: string;
  owner: string;
};

export const useProjectStore = defineStore('project', () => {
  const tasks = ref<Task[]>([
    {
      id: 1,
      title: '设计系统组件审查',
      project: 'Web 平台',
      status: '进行中',
      priority: '高',
      due: '今天',
      owner: '林晓',
    },
    {
      id: 2,
      title: '接入用户行为分析',
      project: '增长实验',
      status: '待开始',
      priority: '中',
      due: '明天',
      owner: '周舟',
    },
    {
      id: 3,
      title: '发布 v2.4.0 版本',
      project: 'Web 平台',
      status: '已完成',
      priority: '高',
      due: '9 月 12 日',
      owner: '林晓',
    },
    {
      id: 4,
      title: '整理季度复盘材料',
      project: '团队协作',
      status: '进行中',
      priority: '低',
      due: '9 月 18 日',
      owner: '小雨',
    },
  ]);
  const filter = ref<'全部' | TaskStatus>('全部');
  const visibleTasks = computed(() =>
    filter.value === '全部'
      ? tasks.value
      : tasks.value.filter((task) => task.status === filter.value),
  );
  const completedCount = computed(
    () => tasks.value.filter((task) => task.status === '已完成').length,
  );
  function addTask(title: string) {
    tasks.value.unshift({
      id: Date.now(),
      title,
      project: 'Web 平台',
      status: '待开始',
      priority: '中',
      due: '下周',
      owner: '我',
    });
  }
  return { tasks, filter, visibleTasks, completedCount, addTask };
});
