var duracao = 0
var lessonType = ""
function bookLesson(){

  const startTime = new Date(document.getElementById('datetime').value)
  const endTime = new Date(startTime)
  endTime.setHours(endTime.getHours() + parseInt(duracao))
  const lesson = new Class(
    "1",
    startTime,
    endTime,
    "1",
    selectedProf,
    document.getElementById("subjectSelect").textContent.trim(),
    identifyLessonType(lessonType)
  )
  console.log(lesson)
  let price = duracao * professores[selectedProf].pricePerHour

  addClassToCart(lesson, price)

  classes.push(lesson)
  localStorage.setItem('classes', JSON.stringify(classes));
  console.log(classes);
}

function identifyLessonType(str) {
  for (const lessonType in LessonType) {
    if (LessonType.hasOwnProperty(lessonType)) {
      if (LessonType[lessonType] === str) {
        return lessonType;
      }
    }
  }
  return null; // Return null if no matching LessonType is found
}

function toggleSelected(button) {
  // Remove "selected" class from all buttons
  var buttons = document.getElementsByClassName("segmented-control-item");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }

  // Add "selected" class to the clicked button
  button.classList.add("selected");
}

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
    duracao = document.getElementById("dropdown-text-2").textContent[0]
    lessonType = document.getElementById('dropdown-text-4').textContent
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

  document.getElementById("popupProfNome").innerHTML = professores[selectedProf].name
  subHtml = ""
  for (subIdx in professores[selectedProf].subjects) {
    subHtml = subHtml + `
      <div class="dropdown-option" onclick="selectOption('${professores[selectedProf].subjects[subIdx]}', 'dropdown-text-1')">${professores[selectedProf].subjects[subIdx]}</div>
    `
  }
  document.getElementById("subjectSelect").innerHTML = subHtml

  horaHtml = ""
  for (var i = 1; i <= 5; i++) {
    horaHtml = horaHtml + `
      <div class="dropdown-option" onclick="selectOption('${i} hora', 'dropdown-text-2')">${i} hora</div>
    `
  }
  document.getElementById("duracaoSelect").innerHTML = horaHtml
  
  modalidadeHtml = ""
  for (subIdx in professores[selectedProf].lessonType) {
    modalidadeHtml = modalidadeHtml + `
      <div class="dropdown-option" onclick="selectOption('${professores[selectedProf].lessonType[subIdx]}', 'dropdown-text-4')">${professores[selectedProf].lessonType[subIdx]}</div>
    `
  }
  document.getElementById("modalidadeSelect").innerHTML = modalidadeHtml  
  
materialHtml = ""
materiaisProf = []
for(i in materiais){
  if(materiais[i].authorId == selectedProf){
    materiaisProf.push(materiais[i])
  }
}
for(i in materiaisProf){
  materialHtml = materialHtml + `
      <div class="item-material">
        <div class="item-title-material">${materiaisProf[i].name}</div>
          <div class="item-details-material">
            <h4 class="item-subtitle-material">${parseFloat(materiaisProf[i].price).toFixed(2)}€</h4>
            <p class="item-text-material">${materiaisProf[i].description}</p>
          </div>
          <div class="item-buttons-material">
            <button class="button-preview">Preview</button>
            <button class="button-material" onclick="addToCart('${materiaisProf[i].id}')">Add</button>
          </div>
      </div>
    `
}
document.getElementById("materialList").innerHTML = materialHtml