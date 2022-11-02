import Link from 'next/link';
import styleButton from './button.module.css';

function Button(props) {
    if (props.link) {
        return(
            <Link legacyBehavior href={props.link}>
                <a className={styleButton.btn}>
                    {props.children} 
                </a>
            </Link>
        )
    }

    return(
        <button className={styleButton.btn} onClick={props.onClick}>
                {props.children} 
        </button>
    )
    
    
}

export default Button;