// ========================================
// TELEGRAM MINI APP
// ========================================

const tg = window.Telegram?.WebApp;

// Сообщаем Telegram, что приложение готово
if (tg) {
    tg.ready();
    tg.expand();
}


// ========================================
// ПОЛЬЗОВАТЕЛЬ TELEGRAM
// ========================================

let telegramUser = null;

if (tg && tg.initDataUnsafe) {
    telegramUser = tg.initDataUnsafe.user;
}


// Если приложение открыли внутри Telegram
if (telegramUser) {

    const firstName =
        telegramUser.first_name || "Маг";

    const lastName =
        telegramUser.last_name || "";

    const fullName =
        `${firstName} ${lastName}`.trim();

    document.getElementById("username").textContent =
        fullName;

    // Первая буква имени
    document.getElementById("avatar").textContent =
        firstName.charAt(0).toUpperCase();

} else {

    // Если открыли обычным браузером
    document.getElementById("username").textContent =
        "Магический странник";
}


// ========================================
// РОЛИ
// ========================================

const roleCards =
    document.querySelectorAll(".role-card");

const currentRole =
    document.getElementById("currentRole");

const notification =
    document.getElementById("notification");


// Получаем сохранённую роль
let savedRole =
    localStorage.getItem("magicRole");


// Показываем сохранённую роль
if (savedRole) {

    currentRole.textContent =
        `✨ ${savedRole}`;

    roleCards.forEach(card => {

        if (card.dataset.role === savedRole) {
            card.classList.add("selected");
        }

    });
}


// ========================================
// ВЫБОР РОЛИ
// ========================================

roleCards.forEach(card => {

    card.addEventListener("click", () => {

        const role =
            card.dataset.role;


        // Снимаем старый выбор
        roleCards.forEach(item => {
            item.classList.remove("selected");
        });


        // Выбираем новую роль
        card.classList.add("selected");


        // Сохраняем
        localStorage.setItem(
            "magicRole",
            role
        );


        // Показываем
        currentRole.textContent =
            `✨ ${role}`;


        // Уведомление
        showNotification(
            `✨ Ты выбрал роль: ${role}`
        );


        // Вибрация Telegram
        if (tg && tg.HapticFeedback) {

            tg.HapticFeedback.impactOccurred(
                "medium"
            );

        }

    });

});


// ========================================
// УВЕДОМЛЕНИЕ
// ========================================

function showNotification(text) {

    notification.textContent =
        text;

    notification.classList.add(
        "show"
    );

    setTimeout(() => {

        notification.classList.remove(
            "show"
        );

    }, 2500);
}


// ========================================
// ДЕМО-УЧАСТНИКИ
// ========================================

const players = [
    {
        name: "Алекс",
        role: "Архимаг",
        icon: "🧙"
    },
    {
        name: "Анна",
        role: "Целитель",
        icon: "🌿"
    },
    {
        name: "Максим",
        role: "Воин",
        icon: "⚔️"
    }
];


const playersContainer =
    document.getElementById("players");


players.forEach(player => {

    const element =
        document.createElement("div");

    element.className =
        "player";

    element.innerHTML = `
        <div class="player-avatar">
            ${player.icon}
        </div>

        <div class="player-info">
            <div class="player-name">
                ${player.name}
            </div>

            <div class="player-role">
                ${player.role}
            </div>
        </div>
    `;

    playersContainer.appendChild(
        element
    );

});