import { createTask, deleteTask, fillTodoList, setError, modifiedTask } from './todoListSlice'
import axios from 'axios'

const URL_API = 'https://mini-back-todo-app-dev-gtxb.4.us-1.fl0.io'

export const fillTodoListAsync = () => {
  return async ( dispatch ) => {
    try {
      const { data } = await axios.get(`${URL_API}/todoList`)
      dispatch(fillTodoList(data))
    } catch (error) {
      console.warn(error)
      dispatch(setError(true))
    }
  }
}

export const createTaskAsync = ( newTask ) => async ( dispatch ) => {
  try {
    const response = await axios.post(`${URL_API}/todoList`, newTask)
    dispatch(createTask(response.data))
  } catch (error) {
    console.warn(error)
    dispatch(setError(true))
  }
}

export const toggleStatusTaskAsync = ( task ) => async ( dispatch ) => {
  try {
    const response = await axios.patch(`${URL_API}/todoList/${task.id}`, { status: !task.status } ) /* PATCH modifica parcialmente */
    dispatch(modifiedTask(response.data))
  } catch (error) {
    console.warn(error)
    dispatch(setError(true))
  }
}

export const deleteTaskAsync = ( taskId ) => async ( dispatch ) => {
  try {
    await axios.delete(`${URL_API}/todoList/${taskId}`)
    dispatch(deleteTask(taskId))
  } catch (error) {
    console.warn(error)
    dispatch(setError(true))
  }
}

export const editTaskAsync = ( task ) => async ( dispatch ) => {
  try {
    await axios.put(`${URL_API}/todoList/${task.id}`, task) /* PUT modifica el objeto completo */
    dispatch(modifiedTask(task))
  } catch (error) {
    console.warn(error)
    dispatch(setError(true))
  }
}