import React from 'react';
import TaskForm from '../components/taskForm/TaskForm';
import ListTask from '../components/ListTask/ListTask';

const Router = () => {
  return (
    <main>
      <h1>Lista de tareas</h1>
      <TaskForm />
      <ListTask />
    </main>
  );
};

export default Router;
