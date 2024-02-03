import React from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <Container>
      <Header title="Task Details" />
      <Section title={task ? task.content: "Task not found"} body={!!task && (
      <><strong>Finish: </strong>{task.done ? "Yes" : "No"}</>
      )} 
    />
    </Container>
  );
}

export default TaskPage;
