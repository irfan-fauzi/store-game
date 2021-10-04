import React from 'react'
import Link from 'next/link'
import styles from '../header/header.module.css'

const Header = () => {
  return (
    <header className={styles['header']}>
      <ul className="flex">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>  
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>    
    </header>
  )
}

export default Header
