import { beforeEach, describe, expect, it } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useProjectStore } from './project';

describe('useProjectStore', () => {
  beforeEach(() => setActivePinia(createPinia()));

  it('filters tasks by status and adds a new task', () => {
    const store = useProjectStore();
    store.filter = '进行中';
    expect(store.visibleTasks).toHaveLength(2);
    store.addTask('准备演示');
    expect(store.tasks[0]).toMatchObject({ title: '准备演示', status: '待开始' });
    expect(store.tasks).toHaveLength(5);
  });

  it('computes completed tasks', () => {
    expect(useProjectStore().completedCount).toBe(1);
  });
});
