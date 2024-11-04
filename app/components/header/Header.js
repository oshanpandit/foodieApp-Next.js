'use client'
import Link from 'next/link';
import logo from '../../../assets/logo.png'
import style from './header-styles.module.css';
import { usePathname } from 'next/navigation';
const Header=()=>{
    const path=usePathname();
    return(

        <header className={style.header}>
            
        <Link className={style.logo} href='/'>
        <img src={logo.src} alt='an image with food'/>
        Next Level Food By-Oshan 
        </Link>

        <nav className={style.nav}>
            <ul>
                <li>
                    <Link href='/meals' className={path.startsWith('/meals')?style.active:undefined}>Browse Meals</Link>
                </li>

                <li>
                    <Link href='/community' className={path=='/community'?style.active:undefined}>Foodie Community</Link>
                </li>
            </ul>
        </nav>

        </header>
    )
}

export default Header;