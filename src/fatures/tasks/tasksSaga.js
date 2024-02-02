import { takeEvery, call, put } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks))
  } catch (error) {
    yield call(alert, "Ups. Something went wrong!!!")
  }
}

export function* watchFetchExampleTasks() {
    console.log("saga działa!");
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
