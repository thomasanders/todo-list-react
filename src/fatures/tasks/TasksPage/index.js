import React from "react";
import Form from "../TasksPage/Form";
import List from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
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
        body={<List />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
