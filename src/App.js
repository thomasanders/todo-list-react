import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "Download ToDo Task List", done: true },
  { id: 2, content: "Eat Pierogi", done: false },
];

const hideDoneTasks = false

function App() {
  return (
    <main className="main">
      <h1 className="main__title">Tasks list</h1>
      <div className="section">
        <h2 className="section__header">Add new task</h2>
        <div className="section__main">
          <Form/>
        </div>
      </div>
      <div className="section">
        <div className="section__header section__headerSecondary">
          <h2>Tasks List </h2>
          <div className="task__newButtons"></div>
        </div>
        <div className="section__main">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
        </div>
      </div>
    </main>
  );
}

export default App;
