import Link from 'next/link';
import styleButton from './button.module.css';

function Button(props) {
    return(
        <Link legacyBehavior href={props.link}>
            <a className={styleButton.btn}>
                 {props.children} 
            </a>
        </Link>
    )
}

export default Button;