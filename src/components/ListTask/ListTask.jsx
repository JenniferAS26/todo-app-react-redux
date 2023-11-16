import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTask,
  toggleStatusTask,
} from '../../store/todoList/todoListSlice';

const ListTask = () => {
  const todoList = useSelector(store => store.todoList.todoList);

  const dispatch = useDispatch();

  const handleToggleStatus = index => {
    dispatch(toggleStatusTask(index));
  };

  const handleDeleteTask = index => {
    dispatch(deleteTask(index));
  };

  return (
    <ul>
      {todoList.map((task, index) => (
        <li key={index}>
          <label>
            <input
              type='checkbox'
              checked={task.status}
              onChange={() => handleToggleStatus(index)}
            />
            <span>{task.task}</span>
          </label>
          <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ListTask;
