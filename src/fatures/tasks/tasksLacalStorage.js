const localStorageKey = "tasks";

export const saveTasksInLocaleStorage = tasks =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

    export const getTasksFormLocaleStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) ||[];