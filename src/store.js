import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './fatures/tasks/tasksSlice';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});