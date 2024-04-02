/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useCallback } from 'react'
import { deleteTask, updateTask } from '../../../services/api'
import styles from './taskCard.module.css'
/* 🌟 ☆ */
export default function TaskCard({ handleFetchTasks, id, content, title, favorite }) {
  const token = localStorage.getItem('token')
  const toggleFavorite = useCallback(async () => {
    console.log('function toggleFavorite called');
    try {
      const response = await updateTask(id, { favorite: !favorite }, token)
      console.log(response);
      handleFetchTasks()
    } catch (error) {
      console.log(error);
    }
  })
  const handleDeleteTask = async () => {
    try {
      const response = await deleteTask(id, token)
      handleFetchTasks()

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className={styles.wrapCard}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className='titleTask'>{title}</h2>
          <i onClick={toggleFavorite}> {favorite ? <p>🌟</p> : <p>☆</p>}
          </i>
        </div>
        <hr />
        <div className="cardBody">
          <p className="content" style={{ overflowY: 'scroll', maxHeight: '200px' }}>
            {content}
          </p>
        </div>
        <hr />
        <div className={styles.cardFooter}>
          {/* <div className="actions">
            <button>pencil</button>
            <button>changeColor</button>
          </div> */}
          <button className={styles.deleteButton} onClick={handleDeleteTask}>X</button>
        </div>
      </div>
    </section>
  )
}
