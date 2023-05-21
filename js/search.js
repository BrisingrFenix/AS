var searchRes = []
var selectedSegmented = "Professores"
function searchAndShow(){
    searchRes = []
    for(id in professores){
        let prof = professores[id] 
        for(ind in prof.subjects){
         let sub = prof.subjects[ind]
         if (sub.includes(searchText)){
             searchRes.push(prof)
         }
        }
     }
     console.log(searchRes);
     
     count = 0
     var resHtml = ""
     for(i in searchRes){
         if (selectedSegmented == "Professores") {
             resHtml = resHtml + `
             <div class="item" onclick="selectProf('${searchRes[i].id}')">
                 <img src="/images/${searchRes[i].image}.png" alt="Image 1" class="item-image">
                 <p style="width: 100%; text-align: left; margin-left: 20px; margin-bottom: 0px; font-weight: bold;">${searchRes[i].name}</p>
                 <p style="width: 100%; text-align: left; margin-left: 20px;margin-top: 0px;">${searchRes[i].bio.substring(0, 60)}...</p>
             </div>
             `
         }
     
         if (selectedSegmented == "Materiais") {
             resHtml = resHtml + `
     
             `
         }
     }
     document.getElementById("searchRes").innerHTML = resHtml
}

searchAndShow()


function toggleSelected(button) {
    // Remove "selected" class from all buttons
    var buttons = document.getElementsByClassName("segmented-control-item");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected");
    }
  
    // Add "selected" class to the clicked button
    button.classList.add("selected");

    const myDiv = document.getElementById("results");
    // Update the HTML content
    if (button.innerHTML == "Materiais") {
        selectedSegmented = "Materiais"
    } else {
        selectedSegmented = "Professores"
    }
    searchAndShow()
  }

  function selectProf(id){
    selectedProf = id
    localStorage.setItem('selectedProf', JSON.stringify(selectedProf));
    window.location.href = "/page/professor.html"
}

