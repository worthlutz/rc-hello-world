import React from 'react'
import styles from './styles.module.css'

export const HelloWorld = ({ text }) => {
  return <div className={styles.test}>Hello World: {text}</div>
}
