import React from "react";

import { HashRouter,  NavLink, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./fatures/tasks/TasksPage";
import Author from "./fatures/author/Author";


// eslint-disable-next-line
export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active"  to="/tasks">Tasks</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active"  to="/author">About me</NavLink>
        </li>
      </ul>
      <Switch>
      
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route path="/">
            <Redirect to="/tasks"/>

        </Route>
      
      </Switch>
    </nav>
  </HashRouter>
);
