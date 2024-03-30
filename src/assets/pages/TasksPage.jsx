/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';

export default function TasksPage() {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <Fragment>
      <div>
        <h1>TasksPage</h1>
      </div>
      <button type='button' onClick={() => logout}>Logout</button>
    </Fragment>
  )
}
