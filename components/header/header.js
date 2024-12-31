export function loadHeader() {
    const fastaskHeader = document.querySelector('#fastask-header');
    fetch("components/header/header.html")
        .then(response => response.text())
        .then(html => {
            fastaskHeader.innerHTML = html
        });
}