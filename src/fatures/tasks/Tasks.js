import React from "react";
import Form from "./Form";
import List from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
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

export default Tasks;
