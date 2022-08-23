import styles from './Task.module.css';
import {Checkbox} from "../Checkbox";
import {Trash} from "phosphor-react";
import {TaskDTO} from "../../DTO/TaskDTO";

interface TaskProps {
    task: TaskDTO,
    onChange():void;
    onRemoveTask():void;
}
export function Task({task, onChange,onRemoveTask}:TaskProps) {
    return (
        <div className={styles.task}>
            <Checkbox checked={task.done} label={task.label} onChange={onChange} />
            <Trash size={24} onClick={onRemoveTask}/>
        </div>
    )
}