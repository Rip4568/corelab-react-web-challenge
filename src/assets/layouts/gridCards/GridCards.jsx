/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from './gridCards.module.css'
export default function GridCards({ children }) {
  return (
    <div className={styles.cards}>
      {children}
    </div>
  )
}
