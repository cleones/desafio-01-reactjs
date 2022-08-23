import styles from './Input.module.css';
import {InputHTMLAttributes} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({...rest}: InputProps) {
    return (
        <input
            className={styles.input}
            {...rest}
        />
    )
}