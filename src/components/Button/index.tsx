import styles from './Button.module.css';
import {ButtonHTMLAttributes} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, ...rest}:ButtonProps) {
    return (
        <button className={styles.button}  type="button" {...rest}>
            {children}
        </button>
    );
}