import React, { createContext, useContext, useReducer, useEffect } from 'react';
import tasksData from '../assets/data/tasks.json';

// Initial state
const initialState = {
  pageTitle: "React ToDo List",
  task: {
    list: tasksData
  }
};

// Action types
const ActionTypes = {
  ADD_TASK: 'ADD_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  REMOVE_TASK_LIST: 'REMOVE_TASK_LIST',
  REMOVE_TASK_LIST_DONE: 'REMOVE_TASK_LIST_DONE',
  CREATE_TASK_LIST_LOCAL_STORAGE: 'CREATE_TASK_LIST_LOCAL_STORAGE',
  UPDATE_TASK_LIST_LOCAL_STORAGE: 'UPDATE_TASK_LIST_LOCAL_STORAGE',
  REMOVE_TASK_LIST_LOCAL_STORAGE: 'REMOVE_TASK_LIST_LOCAL_STORAGE'
};

// Reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        task: {
          ...state.task,
          list: [...state.task.list, action.payload]
        }
      };
    
    case ActionTypes.UPDATE_TASK:
      const taskIndex = state.task.list.findIndex(item => item.id === action.payload.id);
      if (taskIndex !== -1) {
        const updatedList = [...state.task.list];
        updatedList[taskIndex] = action.payload;
        return {
          ...state,
          task: {
            ...state.task,
            list: updatedList
          }
        };
      }
      return state;
    
    case ActionTypes.REMOVE_TASK:
      return {
        ...state,
        task: {
          ...state.task,
          list: state.task.list.filter(item => item.id !== action.payload)
        }
      };
    
    case ActionTypes.REMOVE_TASK_LIST:
      return {
        ...state,
        task: {
          ...state.task,
          list: []
        }
      };
    
    case ActionTypes.REMOVE_TASK_LIST_DONE:
      return {
        ...state,
        task: {
          ...state.task,
          list: state.task.list.filter(item => !item.status.done)
        }
      };
    
    case ActionTypes.UPDATE_TASK_LIST_LOCAL_STORAGE:
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      return {
        ...state,
        task: {
          ...state.task,
          list: storedTasks || []
        }
      };
    
    default:
      return state;
  }
};

// Create context
const TaskContext = createContext();

// Provider component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Getters (computed values)
  const getters = {
    getPageTitle: () => state.pageTitle,
    getTaskList: () => state.task.list,
    getTotalTaskList: () => state.task.list.length,
    getTotalTaskListDone: () => state.task.list.filter(item => item.status.done).length,
    getTaskLast: () => state.task.list[state.task.list.length - 1]
  };

  // Actions
  const actions = {
    addTask: (task) => {
      const taskNew = {
        id: task.id,
        name: task.name,
        status: {
          done: false,
          show: false
        }
      };
      dispatch({ type: ActionTypes.ADD_TASK, payload: taskNew });
    },

    updateTask: (task) => {
      dispatch({ type: ActionTypes.UPDATE_TASK, payload: task });
    },

    removeTask: (taskId) => {
      dispatch({ type: ActionTypes.REMOVE_TASK, payload: taskId });
    },

    removeTaskList: () => {
      dispatch({ type: ActionTypes.REMOVE_TASK_LIST });
    },

    removeTaskListDone: () => {
      dispatch({ type: ActionTypes.REMOVE_TASK_LIST_DONE });
    },

    checkTaskListLocalStorage: () => {
      if (localStorage.getItem('tasks')) {
        try {
          dispatch({ type: ActionTypes.UPDATE_TASK_LIST_LOCAL_STORAGE });
        } catch (e) {
          localStorage.removeItem('tasks');
        }
      } else {
        localStorage.setItem('tasks', JSON.stringify(state.task.list));
      }
    },

    createTaskListLocalStorage: () => {
      localStorage.setItem('tasks', JSON.stringify(state.task.list));
    }
  };

  // Watch for task list changes and update localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.task.list));
  }, [state.task.list]);

  const value = {
    state,
    getters,
    actions
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the context
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};
