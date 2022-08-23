import styles from './Checkbox.module.css';

interface CheckboxProps  {
    checked: boolean;
    label: string;
    onChange(): void
}
export function Checkbox({checked,label,onChange}:CheckboxProps) {
    return (
        <label className={styles.checkbox}>
            <input type="checkbox" checked={checked} onChange={onChange}/>
            <span className={checked ? styles.checkboxLabelChecked:styles.checkboxLabel}>{label}.</span>
            <span className={styles.checkmark}></span>
        </label>
    );
}