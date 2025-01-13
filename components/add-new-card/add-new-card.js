export function loadDialogAddNewCard(dialogAddNewCard) {
    const cancelButton = document.querySelector('#add-new-card__cancel-button');

    cancelButton.addEventListener('click', () => {
        console.log("Fechar modal");
        dialogAddNewCard.close();
    })
}