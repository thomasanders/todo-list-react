import React from "react";

function App() {
  return ( 
  <main className="main">
  <h1 className="main__title">Tasks list</h1>
  <div className="section">
      <h2 className="section__header">Add new task</h2>
      <div className="section__main">
          <form className="js-form form">
              <input className="js-newTask form__newTask" placeholder="add new task" name="To do" type="text"
                  autocomplete="off"/>
              <button className="form__button">Add new task</button>
          </form>
      </div>
  </div>
  <div className="section">
      <div className="section__header section__headerSecondary">
          <h2>Tasks List </h2>
          <div className="task__newButtons js-newButtons"></div>
      </div>
      <div className="section__main">
          <ul className="js-tasks task__list"></ul>
      </div>
  </div>
</main>);
}

export default App;
