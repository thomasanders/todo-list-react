import React from "react";
import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import TaskPage from "./fatures/tasks/TaskPage";
import AuthorPage from "./fatures/author/AuthorPage";
import TasksPage from "./fatures/tasks/TasksPage";

// eslint-disable-next-line
export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/tasks">
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/author">
            About me
          </NavLink>
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
