import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import tasks from '../assets/data/tasks.json';

const useTaskStore = create(
  persist(
    (set, get) => ({
      // State
      pageTitle: 'React ToDo List',
      taskList: tasks,

      // Getters
      getTaskList: () => get().taskList,
      getTotalTaskList: () => get().taskList.length,
      getTotalTaskListDone: () => get().taskList.filter(item => item.status.done).length,
      getTaskLast: () => {
        const list = get().taskList;
        return list.length > 0 ? list[list.length - 1] : undefined;
      },

      // Actions
      addTask: (task) => {
        const taskNew = {
          id: task.id,
          name: task.name,
          status: {
            done: false,
            show: false,
          },
        };
        set(state => ({
          taskList: [...state.taskList, taskNew]
        }));
      },

      updateTask: (task) => {
        set(state => ({
          taskList: state.taskList.map(item => 
            item.id === task.id ? task : item
          )
        }));
      },

      removeTask: (taskId) => {
        set(state => ({
          taskList: state.taskList.filter(item => item.id !== taskId)
        }));
      },

      removeTaskList: () => {
        set({ taskList: [] });
      },

      removeTaskListDone: () => {
        set(state => ({
          taskList: state.taskList.filter(item => !item.status.done)
        }));
      },

      // Local Storage actions
      checkTaskListLocalStorage: () => {
        const stored = localStorage.getItem('tasks');
        if (stored) {
          try {
            const parsedTasks = JSON.parse(stored);
            set({ taskList: parsedTasks });
          } catch (e) {
            localStorage.removeItem('tasks');
          }
        } else {
          get().createTaskListLocalStorage();
        }
      },

      createTaskListLocalStorage: () => {
        const { taskList } = get();
        localStorage.setItem('tasks', JSON.stringify(taskList));
      },

      removeTaskListLocalStorage: () => {
        localStorage.removeItem('tasks');
      },
    }),
    {
      name: 'task-storage',
      partialize: (state) => ({ taskList: state.taskList }),
    }
  )
);

export { useTaskStore };