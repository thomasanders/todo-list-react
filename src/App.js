import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskPage from "./fatures/tasks/TaskPage";
import AuthorPage from "./fatures/author/AuthorPage";
import TasksPage from "./fatures/tasks/TasksPage";
import { StyledNavLink } from "./styled";

// eslint-disable-next-line
export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/tasks">
            Tasks
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink  to="/author">
            About me
          </StyledNavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/tasks/:id">
          <TaskPage />
        </Route>
        <Route path="/tasks">
          <TasksPage />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/tasks" />
        </Route>
        <Route path="/">
          <Redirect to="/tasks" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
