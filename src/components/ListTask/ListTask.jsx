import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteTask,
  toggleStatusTask,
} from '../../store/todoList/todoListSlice'
import { fillTodoListAsync } from '../../store/todoList/todoListActions'

const ListTask = () => {
  const todoList = useSelector(store => store.todoList.todoList)

  const dispatch = useDispatch()

  const handleToggleStatus = index => {
    dispatch(toggleStatusTask(index))
  }

  const handleDeleteTask = index => {
    dispatch(deleteTask(index))
  }

  useEffect(() => {
    dispatch(fillTodoListAsync())
  }, [dispatch])

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
  )
}

export default ListTask
