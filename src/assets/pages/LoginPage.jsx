/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './loginPage.module.css'
import { createTask, loginAPI } from '../services/api'

export default function LoginPage() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log('component Login did mount \n ' + token);
    if (token) {
      navigate('/tasks')
    }
  }, [navigate])

  const login = async () => {
    try {
      const response = await loginAPI(username, password)
      if (response.status === 200) {
        const data = response.data
        localStorage.setItem('token', data.token)
        navigate('/tasks')
      }
      console.table(
        {
          password: password,
          username: username
        }
      )
    } catch (error) {
      let message = ''
      const messageErrors = error.response.data
      for (const messageError of Object.values(messageErrors)) {
        message += `${messageError} \n`
      }
      setErrorMessage(message)
    }
  }

  return (
    <Fragment>
      <section>
        <h1>Login Page</h1>
        {errorMessage}
        <form action="" method="post">
          <label htmlFor="username">Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} name="username" id="username" placeholder='Digite seu username aqui ...' />
          <label htmlFor="password">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)
          }
            name="password" id="password" placeholder='Digite sua senha aqui ...' />
          <button type='button' className={styles.buttonLogin} onClick={login}>Login</button>
          <p>Não tem uma conta ainda ? <a href="/signup">signup</a></p>
        </form>
      </section>
    </Fragment>
  )
}
