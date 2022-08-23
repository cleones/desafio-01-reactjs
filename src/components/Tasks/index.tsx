import styles from './Tasks.module.css';
import EmptyIcon from '../../assets/clipboard.svg';
import {Task} from "../Task";
import {TaskDTO} from "../../DTO/TaskDTO";

interface TasksProps {
    tasks: TaskDTO[];
    toggleDoneTask:(id: string) => void;
    removeTask:(id: string) => void;
}

function EmptyList() {
    return (
        <div className={styles.emptyListWrapper}>
            <img src={EmptyIcon} alt="Empty List"/>
            <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>

                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}

export function Tasks({tasks, toggleDoneTask, removeTask}:TasksProps) {
    const finalize = tasks.filter(task => task.done).length;
    return (
        <div className={styles.tasks}>
            <div className={styles.taskHeader}>
                <div className={styles.taskHeaderInfoGroup}>
                    <span className={styles.taskCreated}>Tarefas criadas</span>
                    <span className={styles.taskCount}> {tasks.length}</span>
                </div>
                <div className={styles.taskHeaderInfoGroup}>
                    <span className={styles.taskDone}>Concluidas</span>
                    <span className={styles.taskCount}> {finalize} de {tasks.length}</span>
                </div>
            </div>

            <div>
                {tasks.length ? (

                    tasks.map(task => (
                        <Task key={task.id} task={task} onChange={() => toggleDoneTask(task.id)} onRemoveTask={() => removeTask(task.id)}/>
                    ))
                ) : <EmptyList/>}
            </div>
        </div>
    )
}