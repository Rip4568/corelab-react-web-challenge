/* eslint-disable no-unused-vars */
import styles from './navbar.module.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <i>🗒️</i>
        <h4 className='image'>CoreNotes</h4>
      </div>
      <div className={styles.wrapSearch}>
        <input type="text" placeholder='Pesquise Aqui ...' />
        <button><img src="https://cdn.icon-icons.com/icons2/494/PNG/512/magnifier_icon-icons.com_48267.png" alt="" /></button>
      </div>
      <div className="close">
        <button className='button' onClick={logout}>logout</button>
      </div>
    </nav>
  )
}
