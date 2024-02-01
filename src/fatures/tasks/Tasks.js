// import React, { useState } from 'react';
import Form from "./Form";
import List from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {

  const {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <body>
      <Container>
        <Header title="Tasks list" />
        <Section
          title="Add new task"
          body={<Form addNewTask={addNewTask} />}
        />

        <Section
          title="Task list"
          body={
            <List
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </body>
  );
}

export default Tasks;