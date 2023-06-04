var searchRes = []
var selectedSegmented = "Professores"
var resProfHtml = ""
var resMatHtml = ""
function searchAndShow(){
    resProfHtml = ""
    resMatHtml = ""
    document.getElementById("results").innerHTML = `
        <div class="item-list" id="searchRes">

        </div>
        `
    //Search Professores ------------------------------
    searchRes = []
    for(idx in professores){
        let prof = professores[idx] 
        for(ind in prof.subjects){
         let sub = prof.subjects[ind]
         if (sub.includes(searchText)){
            if(!searchRes.includes(prof)){
                searchRes.push(prof)
            }
         }
        }
     }
     console.log(searchRes);
     count = 0
     for(i in searchRes){
       
        resProfHtml = resProfHtml + `
        <div class="item" onclick="selectProf('${searchRes[i].id}')">
            <img src="../images/${searchRes[i].image}.png" alt="Image 1" class="item-image">
            <p style="width: 100%; text-align: left; margin-left: 20px; margin-bottom: 0px; font-weight: bold;">${searchRes[i].name}</p>
            <p style="width: 100%; text-align: left; margin-left: 20px;margin-top: 0px;">${searchRes[i].bio.substring(0, 60)}...</p>
        </div>
        `
     }

    //Search Materiais ------------------------------
    searchRes = []
    for(idx in materiais){
        let mat = materiais[idx] 
         let name = mat.name
         if (name.includes(searchText)){
            if(!searchRes.includes(mat)){
                searchRes.push(mat)
            }
        }
     }
     console.log(searchRes);
     count = 0
     resMatHtml = resMatHtml + `
        <div class="item-list" id="searchRes">
    `
     for(i in searchRes){
        var li = parseInt(i)+1
        console.log(li)
        if(li%4 == 0){
            console.log("OPEN")
            resMatHtml = resMatHtml + `
            <div class="item-list" id="searchRes" style="margin-top: 20px;">
            `
        }
        resMatHtml = resMatHtml + `
        <div class="item2" onclick="selectProf('${searchRes[i].authorId}')">
            <p class="item-title">${searchRes[i].name}</p>
            <p class="item-content">${searchRes[i].description.slice(0, 50)}...</p>
        </div>
        `
        if(li%3 == 0){
            resMatHtml = resMatHtml + `
            </div>
            `
        }
     }
     resMatHtml = resMatHtml + `
        </div>
     `

    if(selectedSegmented == "Professores"){
        document.getElementById("searchRes").innerHTML = resProfHtml
    }
    if(selectedSegmented == "Materiais"){
        document.getElementById("results").innerHTML = resMatHtml
    }
    
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
    window.location.href = "./professor.html"
}


`
<div id="results">
    <div class="item-list" id="searchRes">
        <div class="item2">
            <p class="item-title">Solução exame matemática A 20/21</p>
            <p class="item-content">{searchRes[i].description}</p>
        </div>

        <div class="item2">
            <p class="item-title">Solução exame matemática A 22/23</p>
            <p class="item-content">{searchRes[i].description}</p>
        </div>

        <div class="item2">
            <p class="item-title">Ficha ex. Inequações (solução)</p>
            <p class="item-content">{searchRes[i].description}</p>
        </div>
    </div>
    <div class="item-list">
        <div class="item2">
            <p class="item-title">Ficha ex. Limites (solução)</p>
            <p class="item-content">{searchRes[i].description}</p>
        </div>
        <div class="item2">
            <p class="item-title">Video-aula sobre funções</p>
            <p class="item-content">{searchRes[i].description}</p>
        </div>
    </div>
</div>
`
