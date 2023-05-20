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
        const htmlContent = `
        <div class="item-section">
        <div class="item-list">
          <div class="item2">
            <p class="item-title">Exame 20/21 resolvido</p>
            <p class="item-content">Item Text Item Text Item Text Item Text Item Text Item</p>
          </div>
          <div class="item2">
            <p class="item-title">Exame 20/21 resolvido</p>
            <p class="item-content">Item Text Item Text Item Text Item Text Item Text Item</p>
          </div>
          <div class="item2">
            <p class="item-title">Exame 20/21 resolvido</p>
            <p class="item-content">Item Text Item Text Item Text Item Text Item Text Item</p>
          </div>
        </div>
        <div class="item-list" style="margin-top: 20px;">
          <div class="item2">
            <p class="item-title">Exame 20/21 resolvido</p>
            <p class="item-content">Item Text Item Text Item Text Item Text Item Text Item</p>
          </div>
          <div class="item2">
            <p class="item-title">Exame 20/21 resolvido</p>
            <p class="item-content">Item Text Item Text Item Text Item Text Item Text Item</p>
          </div>
          <div class="item2">
            <p class="item-title">Exame 20/21 resolvido</p>
            <p class="item-content">Item Text Item Text Item Text Item Text Item Text Item</p>
          </div>
        </div>
        <div class="item-list" style="margin-top: 20px;">
          <div class="item2">
            <p class="item-title">Exame 20/21 resolvido</p>
            <p class="item-content">Item Text Item Text Item Text Item Text Item Text Item</p>
          </div>
          <div class="item2">
            <p class="item-title">Exame 20/21 resolvido</p>
            <p class="item-content">Item Text Item Text Item Text Item Text Item Text Item</p>
          </div>
          <div class="item2">
            <p class="item-title">Exame 20/21 resolvido</p>
            <p class="item-content">Item Text Item Text Item Text Item Text Item Text Item</p>
          </div>
        </div>
        </div>
        `;
        myDiv.innerHTML = htmlContent;
    } else {
        const htmlContent = `
        <div class="item-list">
            <div class="item" onclick="goToProfessor()">
            <img src="joaopedro.png" alt="Image 1" class="item-image">
            <p class="item-text">Item Text Item Text Item Text Item Text Item Text Item Text Item Text Item Text </p>
            </div>
            <div class="item">
            <img src="nayeon.jpg" alt="Image 2" class="item-image">
            <p class="item-text">Item Text Item Text Item Text Item Text Item Text Item Text Item Text Item Text </p>
            </div>
            <div class="item">
            <img src="nayeon.jpg" alt="Image 3" class="item-image">
            <p class="item-text">Item Text Item Text Item Text Item Text Item Text Item Text Item Text Item Text </p>
            </div>
        </div>
        <div class="item-list" style="margin-top: 20px;">
            <div class="item">
            <img src="nayeon.jpg" alt="Image 1" class="item-image">
            <p class="item-text">Item Text Item Text Item Text Item Text Item Text Item Text Item Text Item Text </p>
            </div>
            <div class="item">
            <img src="nayeon.jpg" alt="Image 2" class="item-image">
            <p class="item-text">Item Text Item Text Item Text Item Text Item Text Item Text Item Text Item Text </p>
            </div>
            <div class="item">
            <img src="nayeon.jpg" alt="Image 3" class="item-image">
            <p class="item-text">Item Text Item Text Item Text Item Text Item Text Item Text Item Text Item Text </p>
            </div>
        </div>
        <div class="item-list" style="margin-top: 20px;">
            <div class="item">
            <img src="nayeon.jpg" alt="Image 1" class="item-image">
            <p class="item-text">Item Text Item Text Item Text Item Text Item Text Item Text Item Text Item Text </p>
            </div>
            <div class="item">
            <img src="nayeon.jpg" alt="Image 2" class="item-image">
            <p class="item-text">Item Text Item Text Item Text Item Text Item Text Item Text Item Text Item Text </p>
            </div>
            <div class="item">
            <img src="nayeon.jpg" alt="Image 3" class="item-image">
            <p class="item-text">Item Text Item Text Item Text Item Text Item Text Item Text Item Text Item Text </p>
            </div>
        </div>
        </div>
            `;
        myDiv.innerHTML = htmlContent;
    }
    
    
  }

  function navigateToNewScreen() {
    // Perform any necessary actions before navigating
  
    // Redirect to the new screen
    window.location.href = "searchResults.html";
    
  }

  function goToProfessor(){
    window.location.href = "professor.html"
  }
  
  