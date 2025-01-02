export function loadDialogAddNewCard() {
    const dialogAddNewList = document.querySelector('#add-new-card-dialog');
    fetch("components/task-card/task-card.html")
        .then(response => response.text())
        .then(html => {
            dialogAddNewList.showModal()
            dialogAddNewList.innerHTML = html
        });
}