import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./fatures/tasks/tasksSlice";
import { watchFetchExampleTasks } from "./fatures/tasks/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
 

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware);
}
});

sagaMiddleware.run(watchFetchExampleTasks);

export default store;
