import {all} from "redux-saga/effects";
import { watchFetchExampleTasks } from "./fatures/tasks/tasksSaga";

export default function* rootSaga(){
    yield all([
watchFetchExampleTasks(),

    ]);
}