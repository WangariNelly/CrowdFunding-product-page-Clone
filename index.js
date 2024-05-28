const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const modalWrapper = document.getElementById("modalWrapper");
const continueBtn = document.getElementsByClassName("continueBtn");
const thankyouModal = document.getElementById("thankyou");
const closebtn = document.getElementById("closebtn");
const gotIt = document.getElementById("closeThankyou");
const thankyouWrapper = document.getElementById("thankyouWrapper");
let bookmark = document.getElementById("bookmark");
let bookmark_text = document.querySelector(".bookmark");
const closeMenu = document.getElementById("close_Menu");
const menuToggle = document.getElementById("menuToggle");
const menuHamburger = document.getElementById("menuHamburger");
const radioButton = document.getElementsByName("inputName");
const labelModal = document.querySelectorAll(".label--modal");
const totalElement = document.getElementById("total");
const totalBackers = document.getElementById("backers");
const availableSlots = document.querySelectorAll(".slots");
// const progressBar = document.querySelector(".progressbar .file");

//opens the modal
openModal.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("fixed");
};

closebtn.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("fixed");
};

gotIt.onclick = function () {
  thankyouModal.style.display = "none";
  document.body.classList.remove("fixed");
};

//bookmark

let bookmarked = false;

bookmark.addEventListener("click", () => {
  console.log("bookmarked");
  bookmarked = !bookmarked;
  bookmarked
    ? (bookmark_text.innerText = "Bookmarked")
    : (bookmark_text.innerText = "Bookmark");
});

//radio buttons functionality

for (let i = 0; i < radioButton.length; i++) {
  radioButton[i].addEventListener("change", () => {
    for (let j = 0; j < labelModal.length; j++) {
      labelModal[j].style.display = "none";
    }

    if (radioButton[i].checked) {
      labelModal[i].style.display = "block";
    }
  });
}

//menu

menuToggle.addEventListener("click", () => {
  menuToggle.style.display = "none";
  closeMenu.style.display = "block";
  menuHamburger.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  menuToggle.style.display = "block";
  menuHamburger.style.display = "none";
});

const labelModals = document.querySelectorAll(".label--modal");
const continueBtns = document.querySelectorAll(".continueBtn");

let targetAmount = 100000;
let totalPledgeAmount = 0;
let backers = 5007;
let initialSlots = parseInt(availableSlots.textContent);

// function updateProgressBar() {
//   // const progressPercentage = Math.min((totalPledgeAmount / targetAmount) * 100, 100);
//   const progressPercentage = (totalPledgeAmount / targetAmount) * 100;
//   progressBar.textContent = `${progressPercentage.toFixed(0)}%`;
// }
// updateProgressBar();


labelModals.forEach((labelModal, index) => {
  const continueBtn = continueBtns[index];
  continueBtn.addEventListener("click", enterPledge);

  function enterPledge(event) {
    event.preventDefault();
    const inputElement = labelModal.querySelector(".pledgeAmount");
    const value = parseFloat(inputElement.value);
    //total pledge
    totalPledgeAmount += value;

    //local storage
    const storedPledges = JSON.parse(localStorage.getItem("pledges") || "[]");
    storedPledges.push(value);
    localStorage.setItem("pledges", JSON.stringify(storedPledges));
    // console.log(localStorage.getItem("pledges"));

    //stores Total pledged
    const storedTotal = JSON.parse(
      localStorage.getItem("totalPledgeAmount") || "[]"
    );
    storedPledges.push(storedTotal);
    localStorage.setItem(
      "totalPledgeAmount",
      JSON.stringify(totalPledgeAmount.toFixed(0))
    );
    totalElement.textContent = `$${totalPledgeAmount.toFixed(0)}`;

    //total backers
    backers++;
    //stores the total backers
    localStorage.setItem("totalBackers", JSON.stringify(backers.toFixed(0)));
    totalBackers.textContent = `$${backers.toFixed(0)}`;
    // remaining slots
    initialSlots--;
    localStorage.setItem(
      "slotsAvailable",
      JSON.stringify(initialSlots.toFixed(0))
    );
    availableSlots.textContent = `$${initialSlots.toFixed(0)}`;
    // if (initialSlots <= 0) {
    //   labelModal.classList.add("inactive");
    updateProgressBar();
    modal.style.display = "none";
    thankyouModal.style.display = "block";
  }
});
// function setBackToDefault(){
//   inputElement.value =""; // input empty
//   continueBtn.textContent = "submit";
//   labelModal.style.display = "none";
// }

//countdown for days

function countDown() {
  const today = new Date();
  const futureDate = new Date(today.getFullYear(), 7, 30);
  const daysDiffrence = futureDate - today;
  const daysRemaining = Math.ceil(daysDiffrence / (1000 * 60 * 60 * 24));
  document.getElementById("days").textContent = daysRemaining;
}
countDown();
