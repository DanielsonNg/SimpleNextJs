import Link from "next/link";
import logoImg from '@/assets/logo.png'
import styles from './mainHeader.module.css'
import Image from "next/image";
import MainHeaderBackground from "./mainHeaderBackground";
import NavLink from "./navLink";


export default function MainHeader() {
    return (
        <>
        <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image
                        src={logoImg}
                        alt="hehe"
                        priority
                    ></Image>
                    Next Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li><NavLink href='/meals'>Browse Meals</NavLink></li>
                        <li><NavLink href='/community'>Food Community</NavLink></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}