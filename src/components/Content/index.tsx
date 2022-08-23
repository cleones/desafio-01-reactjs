import styles from './Content.module.css';
import {v4 as uuid} from 'uuid';
import {Input} from "../Input";
import {Button} from "../Button";
import {PlusCircle} from "phosphor-react";
import {Tasks} from "../Tasks";
import {FormEvent, useState} from "react";
import {TaskDTO} from "../../DTO/TaskDTO";

export function Content() {
    const [tasks, setTasks] = useState<TaskDTO[]>([]);
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const newTask: TaskDTO = {
            done:false,
            label: newTaskDescription,
            id: uuid()
        }
        setTasks(old => [...old, newTask])
        setNewTaskDescription('');
    }

    const toggleDoneTask = (id:string) => {
        setTasks(old => {
            return old.map(task => {
                if(task.id === id) {
                    return {...task, done: !task.done}
                }
                return task;
            })
        })
    }

    const removeTask = (id:string) => {
        setTasks(old => old.filter(task => task.id !== id))
    }

    return (
        <div className={styles.content}>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                />
                <Button
                    type="submit"
                    disabled={!newTaskDescription}
                >
                    Criar
                    <PlusCircle size={16}/>
                </Button>
            </form>
            <Tasks tasks={tasks} toggleDoneTask={toggleDoneTask} removeTask={removeTask}/>
        </div>
    );
}