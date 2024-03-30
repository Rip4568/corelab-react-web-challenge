/* eslint-disable react/prop-types */
import { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginPage(props) {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
  })
  return (
    <Fragment>
      <h1>Login Page</h1>
      <p>
        Here are some relevant code fragments from other files of the repo:
      </p>
      <p>
        the below code fragment can be found in:
        <br />
        {props.children}
      </p>
    </Fragment>
  )
}
