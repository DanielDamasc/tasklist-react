import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "estudar react",
      description: "ver curso e fazer atividades",
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 2,
      title: "lavar carro",
      description: "parte interna e externa",
      isCompleted: false,
      isDeleted: false,
    }
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      // Precisa atualizar esta tarefa.
      if (task.id == taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      // Não precisa atualizar esta tarefa.
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => {
        return task.id !== taskId
      }
    ));
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div>
        <h1 className="text-slate-100 text-3xl font-bold ">Tasks Management</h1>
        {/* Passando o valor do state para o componente através das props. */}
        <Tasks tasks = {tasks} onTaskClick = {onTaskClick} deleteTask = {deleteTask}/>
      </div>
    </div>
  );
}

export default App;