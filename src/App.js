import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskPage from "./fatures/tasks/TaskPage";
import Author from "./fatures/author/Author";
import TasksPage from "./fatures/tasks/TasksPage";
import { StyledNavLink } from "./styled";
import { toTask, toTasks, toAuthor } from "./routes";

// eslint-disable-next-line

export default () => (
  <HashRouter>
    <Navigation />

    <Switch>
      <Route path={toTask()}>
        <Task />
      </Route>
      <Route path={toTasks()}>
        <Tasks />
      </Route>
      <Route path={toAuthor()}>
        <Author />
      </Route>

      <Route to={toTask()}></Route>
      <Route>
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);
