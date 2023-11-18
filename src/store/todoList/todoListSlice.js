import { createSlice } from '@reduxjs/toolkit'

const initialTodoList = {
  todoList: [],
  error: null
}

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: initialTodoList,
  reducers: {
    createTask: (state, action) => {
      state.todoList = [...state.todoList, action.payload]
    },
    toggleStatusTask: (state, action) => {
      state.todoList = state.todoList.map((task, index) => {
        if (index === action.payload) {
          return { ...task, status: !task.status }
        }
        return task
      })
    },
    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter(
        // guion al piso para no emplear el primer parametro
        (_, index) => index !== action.payload
      )
    },
    fillTodoList: (state, action) => {
      state.todoList = action.payload
    },
    setError: ( state, action ) => {
      state.error = action.payload
    }
  },
})

export default todoListSlice.reducer

export const { createTask, toggleStatusTask, deleteTask, fillTodoList, setError } =
  todoListSlice.actions
