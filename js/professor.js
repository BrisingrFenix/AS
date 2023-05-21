const popupOverlay = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.close-btn');
const popupForm = document.querySelector('#popup-form');

function openPopup() {
  popupOverlay.style.display = 'flex';
}

function closePopup() {
  popupOverlay.style.display = 'none';
}

popupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  closePopup();
});

closeBtn.addEventListener('click', closePopup);  
  
function selectOption(option, dropdownId) {
    document.getElementById(dropdownId).textContent = option;
  }