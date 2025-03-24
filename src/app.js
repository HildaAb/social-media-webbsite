//sidebar notification ,fundera varför det inte fungerar
const menuItems = document.querySelectorAll(".menu-item");
const popup = document.querySelector(".notifications-popup");

const messagesNotification = document.querySelector("#messages-notifications");

const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//notifications, fundera.Allt försvinner
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (popup.style.display === "none") {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

//sidebar messages. fundera varför det inte fungerar

//messages Fundera,borde fungera
messagesNotification.addEventListener("click", () => {
  messages.style.color = "blue";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});
