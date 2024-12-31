export function loadTaskList() {
    const taskList = document.querySelector('#task-lists');
    fetch("components/task-lists/task-lists.html")
        .then(response => response.text())
        .then(html => {
            taskList.innerHTML = html
        });
}