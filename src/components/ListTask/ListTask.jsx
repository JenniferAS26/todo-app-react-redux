import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTaskAsync, editTaskAsync, fillTodoListAsync, toggleStatusTaskAsync } from '../../store/todoList/todoListActions'
import { MdDelete, MdOutlineEdit } from 'react-icons/md'
import { FaCheck } from "react-icons/fa"
import Swal from 'sweetalert2'
import './styles.sass'

const ListTask = () => {
  const [edit, setEdit] = useState(false)
  const [nameTask, setNameTask] = useState('')

  const todoList = useSelector(store => store.todoList.todoList)

  const dispatch = useDispatch()

  const handleToggleStatus = task => {
    dispatch(toggleStatusTaskAsync(task))
  }

  const handleDeleteTask = taskId => {
    Swal.fire({
      title: '¿Realmente desea eliminar esta tarea?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Tarea eliminada', '', 'success')
        dispatch(deleteTaskAsync(taskId))
      }
    })
  }

  const handleEditNameTask = ( task ) => {
    setEdit(true)
    setNameTask(task.task)
  }

  const handleSubmit = ( event, task ) => {
    event.preventDefault()
    const modifiedTask = { ...task, task: nameTask }
    dispatch(editTaskAsync(modifiedTask))
    setEdit(false)
    setNameTask('')
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
              onChange={() => handleToggleStatus(task)}
            />
            {
              edit 
                ? <form onSubmit={( event ) => handleSubmit(event, task)}>
                    <input type="text" value={nameTask} onChange={( event ) => setNameTask(event.target.value)} /> 
                    <button type='submit'>
                      <FaCheck />
                    </button> 
                  </form>
                : <span>{task.task}</span>
            }
          </label>
          <div>
            <button className='delete-task' onClick={() => handleEditNameTask(task)}>
              <MdOutlineEdit />
            </button>
            <button className='delete-task' onClick={() => handleDeleteTask(task.id)}>
              <MdDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ListTask
