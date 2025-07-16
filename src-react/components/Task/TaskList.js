import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTask } from '../../context/TaskContext';
import TaskPreview from './TaskPreview';
import UIIcon from '../UI/UIIcon';
import './TaskList.scss';

const TaskList = forwardRef((props, ref) => {
  const { getters } = useTask();
  const taskListWrapperRef = useRef();

  const scrollToBottom = () => {
    if (taskListWrapperRef.current) {
      taskListWrapperRef.current.scrollTop = taskListWrapperRef.current.scrollHeight;
    }
  };

  useImperativeHandle(ref, () => ({
    scrollToBottom
  }));

  useEffect(() => {
    scrollToBottom();
  }, []);

  const taskList = getters.getTaskList();
  const totalTaskList = getters.getTotalTaskList();

  return (
    <div
      ref={taskListWrapperRef}
      className="task-list__wrapper"
    >
      {totalTaskList !== 0 ? (
        <TransitionGroup
          className="task-list"
          component="ul"
        >
          {taskList.map((item) => (
            <CSSTransition
              key={item.id}
              timeout={300}
              classNames="task-list"
            >
              <li className="task-list__item">
                <TaskPreview taskItem={item} />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <div className="task-list__message">
          <p>Your task list is empty</p>
          <UIIcon name="emptyTasks" />
        </div>
      )}
    </div>
  );
});

TaskList.displayName = 'TaskList';

export default TaskList;
