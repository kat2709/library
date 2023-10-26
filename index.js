const menu = document.querySelector("#menu-icon");
const closeBtn = document.querySelector("#close");
const menuBox = document.querySelector("#mob-version");

menu.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
  menuBox.classList.add("hidden-menu");
  document.addEventListener("click", handleMenuClickOutside);
}

function handleMenuClickOutside(e) {
  let elem = e.target;
  if (elem.id === "menu-icon") {
    return;
  }

  while (elem.id !== "mob-version") {
    if (elem.tagName === "BODY") {
      closeMenu();
      return;
    }
    elem = elem.parentElement;
  }
}

function closeMenu() {
  menuBox.classList.remove("hidden-menu");
  document.removeEventListener("click", handleMenuClickOutside);
}

window.addEventListener("scroll", () => {
  closeMenu();
});

// section about
const paginatorOne = document.querySelector("#paginator-one");
const paginatorTwo = document.querySelector("#paginator-two");
const paginatorThree = document.querySelector("#paginator-three");
const paginatorFor = document.querySelector("#paginator-for");
const paginatorFive = document.querySelector("#paginator-five");

const allPaginators = document.querySelectorAll(".pagination-circle");

const circleOne = document.querySelector("#circle-one");
const circleTwo = document.querySelector("#circle-two");
const circleThree = document.querySelector("#circle-three");
const circleFor = document.querySelector("#circle-for");
const circleFive = document.querySelector("#circle-five");

const carouselElem = document.querySelector(".carousel");

const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");

function paginatorRemoveActive() {
  allPaginators.forEach((paginator) =>
    paginator.classList.remove("circle-active")
  );
}

function firstPaginaorClick() {
  carouselElem.style.left = "0px";
  paginatorRemoveActive();
  circleOne.classList.add("circle-active");
  // nextBtn.classList.add('active-prev-next-btn')
  prevBtn.classList.remove("active-prev-next-btn");
}

function secondPaginaorClick() {
  carouselElem.style.left = "-480px";
  paginatorRemoveActive();
  circleTwo.classList.add("circle-active");
  nextBtn.classList.add("active-prev-next-btn");
  prevBtn.classList.add("active-prev-next-btn");
}

function thirdPaginaorClick() {
  carouselElem.style.left = "-960px";
  paginatorRemoveActive();
  circleThree.classList.add("circle-active");
  nextBtn.classList.add("active-prev-next-btn");
  prevBtn.classList.add("active-prev-next-btn");
}

function fourthPaginaorClick() {
  carouselElem.style.left = "-1440px";
  paginatorRemoveActive();
  circleFor.classList.add("circle-active");
  nextBtn.classList.add("active-prev-next-btn");
  prevBtn.classList.add("active-prev-next-btn");
}

function fifthPaginaorClick() {
  carouselElem.style.left = "-1920px";
  paginatorRemoveActive();
  circleFive.classList.add("circle-active");
  nextBtn.classList.remove("active-prev-next-btn");
  prevBtn.classList.add("active-prev-next-btn");
}

paginatorOne.addEventListener("click", firstPaginaorClick);
paginatorTwo.addEventListener("click", secondPaginaorClick);
paginatorThree.addEventListener("click", thirdPaginaorClick);
paginatorFor.addEventListener("click", fourthPaginaorClick);
paginatorFive.addEventListener("click", fifthPaginaorClick);

let position = 0;

nextBtn.addEventListener("click", () => {
  position = window.getComputedStyle(carouselElem).left;
  if (position === "0px") {
    secondPaginaorClick();
  }
  if (position === "-480px") {
    thirdPaginaorClick();
  }
  if (position === "-960px") {
    fourthPaginaorClick();
  }
  if (position === "-1440px") {
    fifthPaginaorClick();
  }
});

prevBtn.addEventListener("click", () => {
  position = window.getComputedStyle(carouselElem).left;
  if (position === "-1920px") {
    fourthPaginaorClick();
  }
  if (position === "-1440px") {
    thirdPaginaorClick();
  }
  if (position === "-960px") {
    secondPaginaorClick();
  }
  if (position === "-480px") {
    firstPaginaorClick();
  }
});

// section favorites
const winterBtn = document.querySelector("#winter");
const springBtn = document.querySelector("#spring");
const summerBtn = document.querySelector("#summer");
const autumnBtn = document.querySelector("#autumn");

const winterBooksBox = document.querySelector("#winter-books-box");
const springBooksBox = document.querySelector("#spring-books-box");
const summerBooksBox = document.querySelector("#summer-books-box");
const autumnBooksBox = document.querySelector("#autumn-books-box");

const allBooksBox = document.querySelectorAll(".books-container");
const menuSeason = document.querySelector(".select-season");

function allBooksBoxRemove() {
  allBooksBox.forEach((box) => {
    box.classList.remove("show-state-books");
  });
}

winterBtn.addEventListener("click", () => {
  allBooksBoxRemove();
  winterBooksBox.classList.add("show-state-books");
});

springBtn.addEventListener("click", () => {
  allBooksBoxRemove();
  springBooksBox.classList.add("show-state-books");
});

summerBtn.addEventListener("click", () => {
  allBooksBoxRemove();
  summerBooksBox.classList.add("show-state-books");
});

autumnBtn.addEventListener("click", () => {
  allBooksBoxRemove();
  autumnBooksBox.classList.add("show-state-books");
});

// header under registration
const iconProfileBtn = document.querySelector("#icon-profile");

iconProfileBtn.addEventListener("click", () => {
  const menu = document.querySelector("#icon-profile-menu");
  menu.classList.toggle("open");
  document.addEventListener("click", handleMenuProfileClickOutside);
});

function handleMenuProfileClickOutside(e) {
  let elem = e.target;
  if (elem.id === "icon-profile" || elem.parentElement.id === "icon-profile") {
    return;
  }

  const menu = document.querySelector("#icon-profile-menu");
  while (elem.id !== "icon-profile-menu") {
    if (elem.tagName === "BODY") {
      menu.classList.remove("open");
      return;
    }
    elem = elem.parentElement;
  }
}

// log-in menu
const logInLink = document.querySelector("#log-in-link");
const logInModal = document.querySelector("#log-in-dialog");
const logInCloseBtn = document.querySelector("#log-in-close-btn");

const loginMenuRegisterLink = document.querySelector(".register-link");

loginMenuRegisterLink.addEventListener("click", () => {
  logInModal.close();
  registerModal.showModal();
});

logInLink.addEventListener("click", () => {
  const menu = document.querySelector("#icon-profile-menu");
  menu.classList.remove("open");
  logInModal.showModal();
  document.body.style.opacity = "0.2";
});

logInCloseBtn.addEventListener("click", () => {
  logInModal.close();
  document.body.style.opacity = "1";
});

logInModal.addEventListener("click", (event) => {
  if (event.target === logInModal) {
    logInModal.close();
    document.body.style.opacity = "1";
  }
});

// registration menu
const registerLink = document.querySelector("#register-link");
const registerModal = document.querySelector("#register-dialog");
const registerCloseBtn = document.querySelector("#register-close-btn");

const registerMenuLoginLink = document.querySelector(".login-link");

registerMenuLoginLink.addEventListener("click", () => {
  registerModal.close();
  logInModal.showModal();
});

registerLink.addEventListener("click", () => {
  const menu = document.querySelector("#icon-profile-menu");
  menu.classList.remove("open");
  registerModal.showModal();
  document.body.style.opacity = "0.2";
});

registerCloseBtn.addEventListener("click", () => {
  registerModal.close();
  document.body.style.opacity = "1";
});

registerModal.addEventListener("click", (event) => {
  if (event.target === registerModal) {
    registerModal.close();
    document.body.style.opacity = "1";
  }
});

const booksObj = {
  1: "the book eaters, sunyi dean",
  2: "cackle, rachel harrison",
  3: "dante: poet of the secular world, erich auerbach",
  4: "the last queen, clive irving",
  5: "the body, stephen king",
  6: "carry: a memoir of survival on stolen land, toni jenson",
  7: "days of distraction, alexandra chang",
  8: "dominicana, angie cruz",
  9: "crude: a memoir, by pablo fajardo & sophie tardy-joubert",
  10: "let my people go surfing, yvon chouinard",
  11: "the octopus museum: poems, brenda shaughnessy",
  12: "shark dialogues: a novel, kiana davenport",
  13: "casual conversation, renia white",
  14: "the great fire, lou ureneck",
  15: "rickey: the life and legend, howard bryant",
  16: "slug: and other stories, megan milks",
};

// registration person
// let countBook = 0;
let ownBooks = [];

const inputName = document.querySelector("#input-name");
const inputLastName = document.querySelector("#input-last-name");
const inputMail = document.querySelector("#input-mail");
const inputPassword = document.querySelector("#input-password");

const registerBtn = document.querySelector(".log-in-submit");
const profileIconName = document.querySelector("#name-lastname-profile");
const nameProfileMenu = document.querySelector("#name-profile-menu");

const profileNameSpan = document.querySelector("#profile-name-span");
const libraryCardNumber = document.querySelector("#card-number");

const loginSubmitBtn = document.querySelector("#log-in-submit");
const inputLoginMail = document.querySelector("#input-login-mail");
const inputLoginPassword = document.querySelector("#input-login-password");

const libraryNumberRandom = Math.floor(Math.random() * 100000000000000)
  .toString(16)
  .slice(0, 9)
  .toUpperCase();

const getCardDiv = document.querySelector(".get-card");
const visitProfileDiv = document.querySelector(".visit-profile");

registerBtn.addEventListener("click", () => {
  let nameStr = String(inputName.value).toLowerCase();
  let lastNameStr = String(inputLastName.value).toLowerCase();
  let mailStr = String(inputMail.value).toLowerCase();
  let passwordStr = String(inputPassword.value).toLowerCase();

  // first name
  if (nameStr !== "") {
    inputName.classList.remove("input-red");
  } else {
    inputName.classList.add("input-red");
  }

  // last name
  if (lastNameStr !== "") {
    inputLastName.classList.remove("input-red");
  } else {
    inputLastName.classList.add("input-red");
  }

  // e-mail
  if (mailStr !== "" && mailStr.includes("@")) {
    inputMail.classList.remove("input-red");
  } else {
    inputMail.classList.add("input-red");
  }

  // password
  if (passwordStr.length >= 8) {
    inputPassword.classList.remove("input-red");
  } else {
    inputPassword.classList.add("input-red");
  }

  if (`${localStorage.getItem("e-mail")}` == mailStr) {
    alert("An account with this email is already registered!");
  }

  // local storage
  if (
    nameStr !== "" &&
    lastNameStr !== "" &&
    mailStr !== "" &&
    mailStr.includes("@") &&
    passwordStr.length >= 8 &&
    `${localStorage.getItem("e-mail")}` != mailStr
  ) {
    localStorage.clear();
    ownBooks = [];

    localStorage.setItem("FirstName", `${nameStr.trim()}`);
    localStorage.setItem("LastName", `${lastNameStr.trim()}`);
    localStorage.setItem("e-mail", `${mailStr.trim()}`);
    localStorage.setItem("Password", `${passwordStr.trim()}`);
    localStorage.setItem("OwnBooks", JSON.stringify(ownBooks));
    localStorage.setItem("ProfileFlag", `${1}`);
    localStorage.setItem("BuyCardFlag", `${0}`);
    localStorage.setItem("Visitors", `${1}`);
    registerModal.close();
    document.body.style.opacity = "1";

    localStorage.setItem("CardNumber", `${libraryNumberRandom}`);
    libraryCardNumber.innerHTML = `${localStorage.getItem("CardNumber")}`;

    const letterProfile = `${localStorage.getItem("FirstName")[0]}${
      localStorage.getItem("LastName")[0]
    }`;
    profileNameSpan.innerHTML = letterProfile;

    profileIconName.title = String(
      `${localStorage.getItem("FirstName")} ${localStorage.getItem("LastName")}`
    ).toUpperCase();

    iconProfileBtn.classList.add("close-item");
    profileIconName.classList.add("close-item-show");

    const visitorsCount = localStorage.getItem("Visitors");
    const countVisitors = document.querySelector("#count-visitors");
    const countVisitorsCard = document.querySelector("#count-visitor-card");
    countVisitors.innerHTML = visitorsCount;
    countVisitorsCard.innerHTML = visitorsCount;

    checkCardBtn.classList.add("close-item");
    checkCardIconsBox.classList.add("flex-open");

    cardInputName.value = `${localStorage.getItem(
      "FirstName"
    )} ${localStorage.getItem("LastName")}`;
    cardInputNumber.value = `${localStorage.getItem("CardNumber")}`;

    getCardDiv.classList.add("close-item");
    visitProfileDiv.classList.add("close-item-show");

    const bookList = document.querySelector("#books-list");
    bookList.innerHTML = "";

    const noBooks = document.querySelector(".any-rented-books");
    noBooks.classList.remove("close-item");

    const bookCounter = document.querySelector("#book-counter");
    const cardBookCounter = document.querySelector("#card-book-counter");
    bookCounter.innerHTML = ownBooks.length;
    cardBookCounter.innerHTML = ownBooks.length;
  }
});

profileIconName.addEventListener("click", () => {
  nameProfileMenu.classList.toggle("open");
  document.addEventListener("click", handleNameProfileClickOutside);
});

function handleNameProfileClickOutside(e) {
  let elem = e.target;
  if (
    elem.id === "name-lastname-profile" ||
    elem.parentElement.id === "name-lastname-profile"
  ) {
    return;
  }

  const menu = document.querySelector("#name-profile-menu");
  while (elem.id !== "name-profile-menu") {
    if (elem.tagName === "BODY") {
      menu.classList.remove("open");
      return;
    }
    elem = elem.parentElement;
  }
}

loginSubmitBtn.addEventListener("click", () => {
  let loginMailStr = inputLoginMail.value;
  let inputLoginPasswordStr = String(inputLoginPassword.value).toLowerCase();

  if (
    inputLoginMail.value === "" ||
    loginMailStr.trim() !== `${localStorage.getItem("e-mail")}`
  ) {
    inputLoginMail.classList.add("input-red");
  } else {
    inputLoginMail.classList.remove("input-red");
  }

  if (
    inputLoginPassword.value === "" ||
    inputLoginPassword.value.length < 8 ||
    inputLoginPasswordStr.trim() !== `${localStorage.getItem("Password")}`
  ) {
    inputLoginPassword.classList.add("input-red");
  } else {
    inputLoginPassword.classList.remove("input-red");
  }

  if (
    (loginMailStr.trim() === `${localStorage.getItem("e-mail")}` &&
      inputLoginPasswordStr.trim() === `${localStorage.getItem("Password")}`) ||
    (loginMailStr.trim() == `${localStorage.getItem("CardNumber")}` &&
      inputLoginPasswordStr.trim() === `${localStorage.getItem("Password")}`)
  ) {
    const letterProfile = `${localStorage.getItem("FirstName")[0]}${
      localStorage.getItem("LastName")[0]
    }`;
    profileNameSpan.innerHTML = letterProfile;
    libraryCardNumber.innerHTML = `${localStorage.getItem("CardNumber")}`;
    iconProfileBtn.classList.add("close-item");
    profileIconName.classList.add("close-item-show");
    logInModal.close();
    document.body.style.opacity = "1";

    const visitorsCount = localStorage.getItem("Visitors");
    let counterVisit = Number(visitorsCount) + 1;
    const countVisitors = document.querySelector("#count-visitors");
    const countVisitorsCard = document.querySelector("#count-visitor-card");
    countVisitors.innerHTML = counterVisit;
    countVisitorsCard.innerHTML = counterVisit;
    localStorage.setItem("Visitors", `${counterVisit}`);

    // let title = profileIconName.title;
    profileIconName.title = String(
      `${localStorage.getItem("FirstName")} ${localStorage.getItem("LastName")}`
    ).toUpperCase();

    checkCardBtn.classList.add("close-item");
    checkCardIconsBox.classList.add("flex-open");
    cardInputName.value = `${localStorage.getItem(
      "FirstName"
    )} ${localStorage.getItem("LastName")}`;
    cardInputNumber.value = `${localStorage.getItem("CardNumber")}`;

    getCardDiv.classList.add("close-item");
    visitProfileDiv.classList.add("close-item-show");

    checkOwnBtn();

    localStorage.setItem("ProfileFlag", `${1}`);
  }
});

function checkOwnBtn() {
  const allBtn = document.querySelectorAll(".allBtn");
  allBtn.forEach((btn) => {
    for (let i = 0; i < ownBooks.length; i++) {
      if (ownBooks[i] === btn.id) {
        btn.disabled = true;
        btn.innerHTML = "Own";
      }
    }
  });
}

const myProfileLink = document.querySelector("#my-profile");
const logOutLink = document.querySelector("#logout-link");
const dialogProfile = document.querySelector("#profile-dialog");
const closeModalProfileBtn = document.querySelector("#modal-profile-close-btn");

logOutLink.addEventListener("click", () => {
  profileIconName.classList.remove("close-item-show");
  iconProfileBtn.classList.remove("close-item");
  nameProfileMenu.classList.remove("open");
  checkCardBtn.classList.remove("close-item");
  checkCardIconsBox.classList.remove("flex-open");
  cardInputName.value = "";
  cardInputNumber.value = "";
  getCardDiv.classList.remove("close-item");
  visitProfileDiv.classList.remove("close-item-show");

  const allBtn = document.querySelectorAll(".allBtn");
  allBtn.forEach((btn) => {
    if (btn.disabled === true) {
      btn.disabled = false;
      btn.innerHTML = "Buy";
      btn.classList.add(".buy-btn");
    }
  });

  localStorage.setItem("ProfileFlag", `${0}`);
});

// open dialog profile
function openProfileWindow() {
  dialogProfile.showModal();
  document.body.style.opacity = "0.1";
  const cardNumber = document.querySelector(".span-card-num");
  cardNumber.innerHTML = `${localStorage.getItem("CardNumber")}`;
  const nameLetter = document.querySelector("#avatar-rectang-span");
  nameLetter.innerHTML = `${localStorage.getItem("FirstName")[0]}${
    localStorage.getItem("LastName")[0]
  }`;
  const nameSurname = document.querySelector(".avatar-name");
  nameSurname.innerHTML = `${localStorage.getItem(
    "FirstName"
  )} ${localStorage.getItem("LastName")}`;
}

myProfileLink.addEventListener("click", () => {
  nameProfileMenu.classList.remove("open");
  openProfileWindow();
});

closeModalProfileBtn.addEventListener("click", () => {
  dialogProfile.close();
  document.body.style.opacity = "1";
});

dialogProfile.addEventListener("click", (event) => {
  if (event.target === dialogProfile) {
    dialogProfile.close();
    document.body.style.opacity = "1";
  }
});

// favorites button
const allBuyBtns = document.querySelectorAll(".buy-btn");
const buyCardDialog = document.querySelector("#buy-card-dialog");
const buyCardCloseBtn = document.querySelector("#buy-card-close-btn");

allBuyBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (localStorage.getItem("BuyCardFlag") == 1) {
      button.disabled = true;
      button.innerHTML = "Own";
      button.classList.remove("buy-btn");

      const noBooks = document.querySelector(".any-rented-books");
      noBooks.classList.add("close-item");

      const bookList = document.querySelector("#books-list");
      ownBooks.push(e.target.id);
      localStorage.setItem("OwnBooks", JSON.stringify(ownBooks));
      const elem = booksObj[e.target.id];
      const bookItem = document.createElement("li");
      bookItem.classList.add("list-item-book");
      bookItem.innerHTML = elem;
      bookList.appendChild(bookItem);

      const bookCounter = document.querySelector("#book-counter");
      const cardBookCounter = document.querySelector("#card-book-counter");
      bookCounter.innerHTML = ownBooks.length;
      cardBookCounter.innerHTML = ownBooks.length;
    }
    if (!iconProfileBtn.classList.contains("close-item")) {
      logInModal.showModal();
      document.body.style.opacity = "0.2";
    }
    if (
      iconProfileBtn.classList.contains("close-item") &&
      localStorage.getItem("ProfileFlag") == 1 &&
      localStorage.getItem("BuyCardFlag") == 0
    ) {
      buyCardDialog.showModal();
      document.body.style.opacity = "0.2";
    }
  });
});

buyCardDialog.addEventListener("click", (event) => {
  if (event.target === buyCardDialog) {
    buyCardDialog.close();
    document.body.style.opacity = "1";
  }
});

buyCardCloseBtn.addEventListener("click", () => {
  buyCardDialog.close();
  document.body.style.opacity = "1";
});

// digital library cards section
const getCardSignUp = document.querySelector("#get-card-sign-up");
const getCardLogIn = document.querySelector("#get-card-log-in");
const checkCardBtn = document.querySelector(".check-card");
const checkCardIconsBox = document.querySelector(".check-card-icons-box");
const cardInputName = document.querySelector("#card-input-name");
const cardInputNumber = document.querySelector("#card-input-number");

getCardSignUp.addEventListener("click", () => {
  registerModal.showModal();
  document.body.style.opacity = "0.2";
});

getCardLogIn.addEventListener("click", () => {
  logInModal.showModal();
  document.body.style.opacity = "0.2";
});

checkCardBtn.addEventListener("click", () => {
  let cardName = String(cardInputName.value).toLowerCase();
  let cardNum = String(cardInputNumber.value).toLowerCase();

  if (
    cardName.trim() ==
      `${localStorage.getItem("FirstName")} ${localStorage.getItem(
        "LastName"
      )}` &&
    cardNum.trim() == `${localStorage.getItem("CardNumber").toLowerCase()}`
  ) {
    checkCardBtn.classList.add("close-item");
    checkCardIconsBox.classList.add("flex-open");

    setTimeout(() => {
      checkCardBtn.classList.remove("close-item");
      checkCardIconsBox.classList.remove("flex-open");
      cardInputName.value = "";
      cardInputNumber.value = "";
    }, 10000);
  }
});

const profileOpenBtn = document.querySelector("#visit-profile-btn");

profileOpenBtn.addEventListener("click", () => {
  openProfileWindow();
});

const buyCardBtn = document.querySelector("#buy-card-btn");
const bankCardNumber = document.querySelector("#bank-card-number");
const expirationCodeMonth = document.querySelector("#expiration-code-month");
const expirationCodeYear = document.querySelector("#expiration-code-year");
const cvCode = document.querySelector("#cv-code");
const cardholderName = document.querySelector("#cardholder-name");
const postalCode = document.querySelector("#postal-code");
const cityTown = document.querySelector("#city-town");

buyCardBtn.addEventListener("click", () => {
  if (bankCardNumber.value === "" || bankCardNumber.value.length < 16) {
    bankCardNumber.classList.add("border-red");
  } else {
    bankCardNumber.classList.remove("border-red");
  }

  if (
    expirationCodeMonth.value === "" ||
    expirationCodeMonth.value.length < 2
  ) {
    expirationCodeMonth.classList.add("border-red");
  } else {
    expirationCodeMonth.classList.remove("border-red");
  }

  if (expirationCodeYear.value === "" || expirationCodeYear.value.length < 2) {
    expirationCodeYear.classList.add("border-red");
  } else {
    expirationCodeYear.classList.remove("border-red");
  }

  if (cvCode.value === "" || cvCode.value.length < 3) {
    cvCode.classList.add("border-red");
  } else {
    cvCode.classList.remove("border-red");
  }

  if (cardholderName.value === "") {
    cardholderName.classList.add("border-red");
  } else {
    cardholderName.classList.remove("border-red");
  }

  if (postalCode.value === "") {
    postalCode.classList.add("border-red");
  } else {
    postalCode.classList.remove("border-red");
  }

  if (cityTown.value === "") {
    cityTown.classList.add("border-red");
  } else {
    cityTown.classList.remove("border-red");
  }

  if (
    bankCardNumber.value.length === 16 &&
    expirationCodeMonth.value.length === 2 &&
    expirationCodeYear.value.length === 2 &&
    cvCode.value.length === 3 &&
    cardholderName.value !== "" &&
    postalCode.value !== "" &&
    cityTown.value !== ""
  ) {
    localStorage.setItem("BuyCardFlag", `${1}`);
    buyCardDialog.close();
    document.body.style.opacity = "1";
  }
});

// copy library number btn
const copyBtn = document.querySelector("#copy-btn");

copyBtn.addEventListener("click", () => {
  const cardNumberCopy = document.querySelector(".span-card-num");
  navigator.clipboard.writeText(cardNumberCopy.innerHTML);
});

window.onload = () => {
  // each can be "null" or "string"
  const firstName = localStorage.getItem("FirstName");
  const lastName = localStorage.getItem("LastName");
  const savedBooks = localStorage.getItem("OwnBooks");
  const cardNumber = localStorage.getItem("CardNumber");
  const profileFlag = localStorage.getItem("ProfileFlag");
  const countVisit = localStorage.getItem("Visitors");

  if (profileFlag == 1) {
    const numberCard = document.querySelector("#card-number");
    numberCard.innerHTML = cardNumber;
    const letterProfile = `${localStorage.getItem("FirstName")[0]}${
      localStorage.getItem("LastName")[0]
    }`;
    profileNameSpan.innerHTML = letterProfile;
    iconProfileBtn.classList.add("close-item");
    profileIconName.classList.add("close-item-show");

    checkCardBtn.classList.add("close-item");
    checkCardIconsBox.classList.add("flex-open");
    cardInputName.value = `${firstName} ${lastName}`;
    cardInputNumber.value = `${cardNumber}`;

    getCardDiv.classList.add("close-item");
    visitProfileDiv.classList.add("close-item-show");

    const countVisitors = document.querySelector("#count-visitors");
    const countVisitorsCard = document.querySelector("#count-visitor-card");
    countVisitors.innerHTML = Number(countVisit);
    countVisitorsCard.innerHTML = Number(countVisit);
  }

  if (savedBooks !== null) {
    ownBooks = JSON.parse(savedBooks);
    const bookCounter = document.querySelector("#book-counter");
    const cardBookCounter = document.querySelector("#card-book-counter");
    bookCounter.innerHTML = ownBooks.length;
    cardBookCounter.innerHTML = ownBooks.length;

    const noBooks = document.querySelector(".any-rented-books");
    noBooks.classList.add("close-item");

    const bookList = document.querySelector("#books-list");

    for (let i = 0; i < ownBooks.length; i++) {
      const bookId = ownBooks[i];
      const book = booksObj[bookId];
      const bookItem = document.createElement("li");
      bookItem.classList.add("list-item-book");
      bookItem.innerHTML = book;
      bookList.appendChild(bookItem);
    }

    const allBtn = document.querySelectorAll(".allBtn");
    allBtn.forEach((btn) => {
      for (let i = 0; i < ownBooks.length; i++) {
        if (ownBooks[i] === btn.id) {
          btn.disabled = true;
          btn.innerHTML = "Own";
        }
      }
    });
  }
};
