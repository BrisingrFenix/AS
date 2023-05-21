var profHTML = ""
for (var i = 0; i < 3; i++) {
    profHTML = profHTML + `
    <div class="item" onclick="selectProf('${professores[i].id}')">
        <img src="images/${professores[i].image}.png" alt="Image 1" class="item-image">
        <p style="width: 100%; text-align: left; margin-left: 20px; margin-bottom: 0px; font-weight: bold;">${professores[i].name}</p>
        <p style="width: 100%; text-align: left; margin-left: 20px;margin-top: 0px;">${professores[i].bio.substring(0, 60)}...</p>
    </div>
    `
}
document.getElementById("professoreList").innerHTML =  profHTML

function selectProf(id){
    selectedProf = id
    localStorage.setItem('selectedProf', JSON.stringify(selectedProf));
    window.location.href = "./page/professor.html"
}

