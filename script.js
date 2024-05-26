const openProjectModalButton = document.getElementById("openModal");
const modal = document.getElementById("modal");
const modalWrapper = document.getElementById("modalWrapper");
const radioButtons = document.querySelectorAll('input[type="radio"][name="inputName"]'); // Select all radio buttons with name "inputName"
const continueBtn = document.getElementById("continueBtn"); // Assuming only one button
const thankyouModal = document.getElementById("thankyou");
const closebtn = document.getElementById("closebtn");
const gotIt = document.getElementById("closeThankyou");
const thankyouWrapper = document.getElementById("thankyouWrapper");
const bookmark = document.getElementById("bookmark");
const bookmarkText = document.querySelector(".bookmark"); // Using querySelector for efficiency
const labels = document.querySelectorAll("label");

// Open Modal
openProjectModalButton.onclick = function () {
  modal.classList.add("show"); // Using a CSS class for styling (modify in CSS)
  document.body.classList.add("fixed");
};

// Continue Button
continueBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  thankyouModal.classList.add("show"); // Using a CSS class for styling
});

// Close Modal and Thankyou Note
closebtn.onclick = function () {
  modal.classList.remove("show");
  document.body.classList.remove("fixed");
};

gotIt.onclick = function () {
  thankyouModal.classList.remove("show");
  document.body.classList.remove("fixed");
};

// Bookmark Functionality
let bookmarked = false;

bookmark.addEventListener("click", () => {
  bookmarked = !bookmarked;
  bookmarked ? (bookmarkText.innerText = "Bookmarked") : (bookmarkText.innerText = "Bookmark");
});

// Pledge Input based on Radio Button Selection
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    const selectedReward = radioButton.parentElement; // Get the parent element of the radio button (usually the reward section)
    const labelModalElement = selectedReward.querySelector('.label--modal'); // Get the corresponding label--modal element

    // Hide all pledge sections initially (if you have multiple)
    document.querySelectorAll('.label--modal').forEach(label => label.style.display = 'none'); // Hide all pledge sections

    // Show the pledge section associated with the selected radio button
    if (labelModalElement) { // Check if the label--modal element exists
      labelModalElement.style.display = 'block'; // Display the pledge section
    }
  });
});

// Menu Toggle
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // Toggle active class on the menu list
  menuToggle.classList.toggle('hidden'); // Toggle hidden class on the menuToggle (optional for styling)
  closeMenu.classList.toggle('active'); // Toggle active class on the closeMenu icon
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active'); // Remove active class from the menu list
  menuToggle.classList.remove('hidden'); // Remove hidden class from menuToggle (optional for styling)
  closeMenu.classList.remove('active'); // Remove active class from closeMenu icon
});
