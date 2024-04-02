/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './loginPage.module.css'
import { createTask, loginAPI, signupAPI } from '../services/api'

import React from 'react'

export default function SignupPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
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

  const signup = async () => {
    console.table(
      {
        email: email,
        password: password,
        username: username
      }
    )

    try {
      const response = await signupAPI(username, email, password)
      if(response.statusCode === 200) {
        navigate('/')
      }
    } catch (error) {
      console.log(error);
      let message = ''
      const messageErrors = error.response.data
      for (const messageError of error.response.data.error.errors) {
        message += `${messageError}! \n`
      }
      setErrorMessage(message)
    }
  }

  return (
    <Fragment>
      <section>
        <h1>Signup Page</h1>
        <p>{errorMessage}</p>
        <form action="" method="post">
          <label htmlFor="username">Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} name="username" id="username" placeholder='Digite seu username aqui ...' />
          <label htmlFor="password">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)
          }
            name="password" id="password" placeholder='Digite sua senha aqui ...' />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={(e) => {
            setEmail(e.target.value)
          }} id="email" placeholder='Digite seu email aqui ...' />
          <button type='button' className={styles.buttonLogin} onClick={signup}>Register</button>
          <p>Ja tem uma conta ? faça <a href="/">login</a></p>
        </form>
      </section>
    </Fragment>
  )
}
