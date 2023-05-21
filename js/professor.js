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
  
function selectOption(option, dropdownId) {
    document.getElementById(dropdownId).textContent = option;
  }

  console.log(professores);
  console.log(selectedProf)
  document.getElementById("profName").innerHTML = professores[selectedProf].name
  document.getElementById("profAcademy").innerHTML = professores[selectedProf].academicLevel
  document.getElementById("profImage").innerHTML = `<img style="width: 370px; height: 280px" src="../images/${professores[selectedProf].image}.png" alt="Profile Image">`

  document.getElementById("profPreco").innerHTML = `Preço: ${professores[selectedProf].pricePerHour},00€`
  document.getElementById("profModalidade").innerHTML = `Atende: ${professores[selectedProf].lessonType}`
  document.getElementById("profAcademic").innerHTML = `Habilitações Académicas: ${professores[selectedProf].academicLevel}`
  document.getElementById("profRating").innerHTML = `Avaliações: ${professores[selectedProf].avgRatings}`
  