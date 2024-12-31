import { loadHeader } from "./components/header/header.js";
import { loadTaskList } from "./components/task-lists/task-lists.js";

document.addEventListener('DOMContentLoaded', () => {
    loadHeader()
    loadTaskList()
})