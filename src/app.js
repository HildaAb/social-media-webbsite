//sidebar notification ,fundera varför det inte fungerar
const menuItems = document.querySelectorAll(".menu-item");
const popup = document.querySelector("#notifications-popup");

const messagesNotification = document.querySelector("#messages-notification");

const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

const fontSizes = document.querySelectorAll(".choose-size span");
let root = document.querySelector(":root");

const colorPalette = document.querySelectorAll(".choose-color span");

//notifications
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

//messageSearch

const searchMessage = () => {
  let val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelectorAll("h5").textContent;
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

//message card
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";

  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//theme

const openThemeModal = () => {
  themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);
//remove active from span

const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

//font-size
fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//colors
