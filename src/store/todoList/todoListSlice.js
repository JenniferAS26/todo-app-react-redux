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
    modifiedTask: (state, action) => {
      state.todoList = state.todoList.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload
        }
        return task
      })
    },
    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter(
        // guion al piso para no emplear el primer parametro
        ( task ) => task.id !== action.payload
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

export const { createTask, modifiedTask, deleteTask, fillTodoList, setError } =
  todoListSlice.actions
