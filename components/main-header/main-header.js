"use client"
import Link from "next/link"
import imgLogo from '@/assets/logo.png'
import styles from './main-header.module.css'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import NavLink from "../nav-link"

const MainHeader = () => {

  const pathname = usePathname()

  return (
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
                <Image src={imgLogo} alt="logo" width={400} height={400} priority />
          Next level foods
        </Link>
        <nav className={styles.nav}>
          <ul>
              <li>
                <NavLink href="/meals" caption="Browse Meals" />
              </li>
              <li>
                <NavLink href="/community" caption="Foodies Community" />
              </li>
          </ul>

        </nav>
      </header>
  )
}

export default MainHeader
