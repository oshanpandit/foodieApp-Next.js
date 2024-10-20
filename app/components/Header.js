import Link from 'next/link';
import logo from '../../assets/logo.png'
import style from './header-styles.module.css';
const Header=()=>{
    return(

        <header className={style.header}>
            
        <Link className={style.logo} href='/'>
        <img src={logo.src}/>
        </Link>

        <nav className={style.nav}>
            <ul>
                <li>
                    <Link href='/meals'>Browse Meals</Link>
                </li>

                <li>
                    <Link href='/community'>Foodie Community</Link>
                </li>
            </ul>
        </nav>

        </header>
    )
}

export default Header;