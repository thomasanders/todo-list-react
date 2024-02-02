import React from "react";
import Form from "./Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons"
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";



function TasksPage() {

  
  return (
    <Container>
      <Header title="Tasks list" />
      <Section title="Add new task" body={<Form />} />

      <Section
        title="Task list"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
