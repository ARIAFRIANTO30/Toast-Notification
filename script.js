const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", function () {
    createNotification();
});

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    container.appendChild(notif);

    notif.innerText = "Never Surrender!";

    setTimeout(() => {
        notif.remove();
    }, 3000);
}