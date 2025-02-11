import Link from "next/link"
import styles from './nav-link.module.css'
import { usePathname } from "next/navigation"

const NavLink = ({ href, caption }) => {

    const pathname = usePathname()

    return (
        <div>
            <Link href={href} className={pathname.includes(href) ? `${styles.link} ${styles.active}` : `${styles.link}`}>{caption}</Link>
        </div>
    )
}

export default NavLink
