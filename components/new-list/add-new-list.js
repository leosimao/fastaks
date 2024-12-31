export function openDialogAddNewList() {
    const dialogAddNewList = document.querySelector('#add-new-list-dialog');
    fetch("components/new-list/add-new-list.html")
        .then(response => response.text())
        .then(html => {
            dialogAddNewList.innerHTML = html

            dialogAddNewList.showModal()

        });
}