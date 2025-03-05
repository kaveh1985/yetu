import React from 'react'
import styles from './Header.module.css';
import Icons from '../elements/Icons';
import Title from '../elements/Title';



export default function Header() {
  return (
    <div className={styles.header}>Header
      <Icons />
      <Title />
    </div>
  )
}
