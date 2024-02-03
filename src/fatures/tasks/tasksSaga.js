import {
  takeEvery,
  call,
  put,
  takeLatest,
  select,
  delay,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  fetchExampleTasks,
  selectTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} from "./tasksSlice";
import { saveTasksInLocaleStorage } from "./tasksLacalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Ups. Something went wrong!!!");
  }
}
function* saveTasksInLocaleStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocaleStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocaleStorageHandler);
}
