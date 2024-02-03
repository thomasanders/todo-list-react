import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./fatures/tasks/TasksPage";
import Task from "./fatures/tasks/TaskPage";
import AuthorPage from "./fatures/author/AuthorPage";
import Navigation from "./Navigation";
import { toAuthor, toTask, toTasks } from "./routes";

const App = () => (
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
                <AuthorPage />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;