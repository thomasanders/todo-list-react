import {all} from "redux-saga/effects";
import { tasksSaga } from "./fatures/tasks/tasksSaga";

export default function* rootSaga(){
    yield all([
tasksSaga(),

    ]);
}