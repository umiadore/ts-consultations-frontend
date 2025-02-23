// import styles from './ToDoApp.module.css'

import { useState } from "react";
interface ITask {
  id: number;
  text: string;
  completed: boolean;
}

export default function ToDoApp(): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    
  };

  return (
    <div>
      <h2>ToDoApp</h2>
    </div>
  );
}
