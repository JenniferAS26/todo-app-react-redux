import { createTask, fillTodoList, setError } from './todoListSlice'
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