import React from "react";
// import { useSelector } from "react-redux";
import Form from "./Form";
import List from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
// import { useTasks } from "../../useTasks";
// import { selectTasks } from "./tasksSlice";
// import { useState } from "react";

function Tasks() {
  // const [hideDone, setHideDone] = useState(false);

  // const toggleHideDone = () => {
  //   setHideDone(hideDone => !hideDone);
  // };
  // const { tasks } = useSelector(selectTasks);

  // const {
  // tasks,
  // hideDone,
  // toggleHideDone,
  //   removeTask,
  //   toggleTaskDone,
  //   setAllDone,
  //   addNewTask,
  // } = useTasks();

  return (
    <body>
      <Container>
        <Header title="Tasks list" />
        <Section title="Add new task" body={<Form />} />

        <Section
          title="Task list"
          body={
            <List
            // tasks={tasks}
            // hideDone={hideDone}
            // removeTask={removeTask}
            // toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
            // tasks={tasks}
            // hideDone={hideDone}
            // toggleHideDone={toggleHideDone}
            // setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </body>
  );
}

export default Tasks;
