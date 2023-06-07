var profHTML = ""
for (var i = 0; i < 3; i++) {
    profHTML = profHTML + `
    <div class="item" onclick="selectProf('${professores[i].id}')">
            <img src="images/${professores[i].image}.png" alt="Image 1" class="item-image">
            <p style="width: 100%; text-align: left; margin-left: 20px; margin-bottom: 0px; font-weight: bold;">${professores[i].name} - ${professores[i].avgRatings} - ${professores[i].pricePerHour}€</p>
            <p style="width: 100%; text-align: left; margin-left: 20px;margin-top: 0px;">${professores[i].bio.substring(0, 60)}...</p>
        </div>
    `
}
document.getElementById("professoreList").innerHTML = profHTML

var matHtml = ""
for (var i = 0; i < 3; i++) {
    matHtml = matHtml + `
    <div class="item2" onclick="selectProf('${materiais[i].authorId}')">
            <p class="item-title">${materiais[i].name}</p>
            <p style="width: 100%; text-align: left; margin-left: 20px; margin-bottom: 0px; font-weight: bold;">${materiais[i].avgRatings} - ${materiais[i].price}€</p>
            <p style="width: 100%; text-align: left; margin-left: 20px;margin-top: 0px;">${materiais[i].description.slice(0, 50)}...</p>
        </div>
    `
}
document.getElementById("materiaisList").innerHTML = matHtml

function selectProf(id) {
    selectedProf = id
    localStorage.setItem('selectedProf', JSON.stringify(selectedProf));
    window.location.href = "./page/professor.html"
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
