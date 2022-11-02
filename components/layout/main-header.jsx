import Link from 'next/link';
import styleMainHeader from './main-header.module.css';

function MainHeader(params) {
    return(
        <header className={styleMainHeader.header}>

            <div className={styleMainHeader.logo}>
                <Link href="/">Nader Jafarpour</Link>
            </div>

            <nav className={styleMainHeader.navigation}>
                <ul>
                    <li>
                        <Link href="/events">Brows All Event</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default MainHeader;