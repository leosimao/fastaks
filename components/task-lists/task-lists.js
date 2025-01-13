export function loadTaskList() {
    const taskList = document.querySelector('#task-lists');
    fetch("components/task-lists/task-lists.html")
        .then(response => response.text())
        .then(html => {
            taskList.innerHTML = html
            loadDialogComponent()
        });
}

function loadDialogComponent() {
    const body = document.body

    fetch("components/add-new-card/add-new-card.html")
        .then(response => response.text())
        .then(html => {
            body.insertAdjacentHTML('beforeend', html);
            const buttonAddNewCard = document.querySelector('#add-new-card__button');
            const addNewCardDialog = document.querySelector('#add-new-card__dialog');

            import('../add-new-card/add-new-card.js')
                .then(module => module.loadDialogAddNewCard(addNewCardDialog));

            buttonAddNewCard.addEventListener('click', (event) => {
                addNewCardDialog.showModal()
            })
        })
}