import React, { useState } from "react";
import "./App.css";
import logo from "./assest/todolist.jpg"

// 1. HTML
// 2. STATE
// 3. INTERACTION
// 4. CSS

function App() {
  const [Tasks, setTask] = useState([
    { titles: "Exercice Panier", isDone: true },
    { title: "Garder la motivation", isDone: false },
    { title: "Ne baissez pas les Bras", isDone: true },
    { title: "Avancez Hamza", isDone: false },
  ]);
  const [inputTask, setinputTask] = useState("");

  return (
    <div>
      <div className="FormLogo">
      <img src={logo} /> 
      <p> TODOLIST </p>
      </div>
       <br />
      <div className="FormTodolist">
        {Tasks.map((task, index) => {
          return (
            <div>
              {/* partie checkbox */}

              <input
                type="checkbox"
                checked={task.isDone}
                onClick={() => {
                  const newTask = [...Tasks];
                  if (newTask[index].isDone === true) {
                    newTask[index].isDone = false;
                  } else {
                    newTask[index].isDone = true;
                  }
                  // newTask[index].isDone= !newTask[index].isDone
                  setTask(newTask);
                }}
              />

              <span className={task.isDone ? "checked" : "checked2"}> {task.title} </span>

              <button className="FormDelete"
                onClick={() => {
                  const newTask = [...Tasks];
                  newTask.splice(index, 1);
                  setTask(newTask);
                }}
              >
                Effacer
              </button>
            </div>
          );
        })}
        <form
          onSubmit={(event) => {
            event.preventDefault();

            const newTask = [...Tasks];
            newTask.push({
              title: inputTask,
              isDone: false,
            });
            setTask(newTask);
            setinputTask("");
          }}
        >
          <input className="FormInput"
          placeholder="  Entrez vos Taches a faire SVP"
            type="text"
            value={inputTask}
            onChange={(event) => {
              const value = event.target.value;
              setinputTask(value);
            }}
          />

          <button className="FormAdd" type="submit"> Add Task </button>
        </form>
      </div>
    </div>
  );
}

export default App;
