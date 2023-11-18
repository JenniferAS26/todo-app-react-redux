// FUENTE DE LA VERDAD
import { configureStore } from '@reduxjs/toolkit'
// se le cambia el nombre a todoListSlice.reducer
import todoListReducer from './todoList/todoListSlice'
import thunk from 'redux-thunk'

const rootReducer = {
  todoList: todoListReducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})

export default store
