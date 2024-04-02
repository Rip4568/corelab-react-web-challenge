/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react'
import styles from './formCard.module.css'
import { createTask } from '../../../services/api'
/* 
  favorite  Boolean?
  color     String?
  content   String?
  title     String
 */
export default function FormCard({handleFetchTasks}) {
  const token = localStorage.getItem('token');
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [messageError, setMessageError] = useState('')
  const handleCreateTask = async () => {
    try {
      if(title.length > 2) {
        const response = await createTask(title, content, favorite, token)
        handleFetchTasks()
      } else {
        setMessageError('Insira um título, tem que ter no minimo 3 caracteres')
        setTimeout(() => {
          setMessageError('')
        }, 3000)
      }
    } catch (error) {
      console.log(error);
    }
  }
  /* 🌟 ☆ */
  return (
    <Fragment>
      <main className={styles.container}>
        <p>{messageError}</p>
        <form action="" method="post">
          <div className={styles.card}>
            <div className={styles.header}>
              <input required type="text" placeholder='Titulo da Task'
                onChange={(e) => setTitle(e.target.value)} />
              <i>{
                favorite ?
                  <i>🌟</i>
                  :
                  <i>☆</i>
              }</i>
            </div>
            <hr />
            <div className={styles.body}>
              <textarea name="content" id="" cols="30" placeholder='Conteudo adicional ...' rows="3" onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <button type='button' className={styles.buttonCreate} onClick={ handleCreateTask}>Criar</button>
          </div>
        </form>
      </main>
    </Fragment>
  )
}
