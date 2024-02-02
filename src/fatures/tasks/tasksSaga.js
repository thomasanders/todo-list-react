import { takeEvery, call, put, takeLatest, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks, selectTasks } from "./tasksSlice";
import { saveTasksInLocaleStorage } from "./tasksLacalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks))
  } catch (error) {
    yield call(alert, "Ups. Something went wrong!!!")
  }
}
function* saveTasksInLocaleStorageHandler (){
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocaleStorage, tasks);
}

export function* tasksSaga() {
   
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocaleStorageHandler);
}
