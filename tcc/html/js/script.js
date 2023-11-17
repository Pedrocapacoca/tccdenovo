// Função para pesquisar jogos
function searchGames() {
    const query = document.getElementById("search-input").value;
    alert(`Pesquisando por: ${query}`);
}
// Função para alternar visibilidade do menu
function toggleMenu() {
    const menu = document.getElementById("side-menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
//função para alterar a cor do site
document.getElementById("modeSwitch").addEventListener("change", toggleMode);

function toggleMode() {
    const body = document.body;

    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
    } else {
        body.classList.add("light-mode");
    }
}
//aparecer popup e na escola eu continuo
function showDownloadPopup() {
    alert("Fazendo download...");
}

function showDonatePopup() {
    alert("Aguardando transação...");
}