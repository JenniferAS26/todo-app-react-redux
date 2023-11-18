import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { createTask } from '../../store/todoList/todoListSlice'
import './styles.sass'
import { createTaskAsync } from '../../store/todoList/todoListActions'

const TaskForm = () => {
  const [newTask, setNewtask] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(
      createTaskAsync({
        task: newTask,
        status: false,
      })
    )
    setNewtask('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingrese una tarea'
          value={newTask}
          onChange={event => setNewtask(event.target.value)}
        />
        <button>Crear Tarea</button>
      </form>
    </>
  )
}

export default TaskForm
