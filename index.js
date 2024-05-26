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
  console.log('bookmarked')
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

menuToggle.addEventListener('click', () => {
  menuToggle.style.display = 'none';
  closeMenu.style.display = 'block';
  menuHamburger.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  closeMenu.style.display = 'none';
  menuToggle.style.display = 'block';
  menuHamburger.style.display = 'none';
});


const labelModals = document.querySelectorAll(".label--modal");
const continueBtns = document.querySelectorAll(".continueBtn");

labelModals.forEach((labelModal, index) => {
  const continueBtn = continueBtns[index];

  continueBtn.addEventListener("click", enterPledge);

  function enterPledge(event) {
    event.preventDefault(); 

    const inputElement = labelModal.querySelector(".pledgeAmount");
    const value = parseFloat(inputElement.value); 

    // Store total amount (assuming single pledge per form)
    localStorage.setItem("pledgeAmount", JSON.stringify(value));
    console.log(localStorage.getItem("pledgeAmount"));

    modal.style.display = "none";
   thankyouModal.style.display = "block";
  }
});
