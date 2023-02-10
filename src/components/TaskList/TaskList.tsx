import React from 'react'
// inteface
import { ITask } from '../../interfaces/Task'

// css
import styles from "./TaskList.module.css"

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleUpdate(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleUpdate }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificultade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil' onClick={() => handleUpdate(task)}></i>
              <i className='bi bi-trash' onClick={() => handleDelete(task.id)}></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastrados</p>
      )}
    </>
  )
}

export default TaskList