import styles from '../styles/Home.module.css'
import Link from 'next/link'

const NavBar = () => {

    return (
        <>
        <div className={styles.nav}>
           <Link href="/">Matthew</Link>
        </div>
        </>
    )
}

export default NavBar;