  function navigateToNewScreen(page) {
    window.location.href = page;
  }

  function goToProfessor(){
    window.location.href = "professor.html"
  }

  // Define an array to store the items in the cart
  let items = {
    "item1": [
      "Solução exame matemática A 20/21",
      "15",
      "Text (PDF) - By: Professor João Pedro",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dapibus justo, sit amet iaculis leo. Sed et sem faucibus, volutpat ex v...",
      "item1"
    ],
    "item3": [
      "Ficha ex. inequações c/ soluções",
      "7",
      "Text (PDF) - By: Professor João Pedro",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dapibus justo, sit amet iaculis leo. Sed et sem faucibus, volutpat ex v...",
      "item3"
    ],
    "item2": [
      "VideoAula sobre limites",
      "5.50",
      "Video (MP4) - By: Professor João Pedro",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dapibus justo, sit amet iaculis leo. Sed et sem faucibus, volutpat ex v...",
      "item2"
    ]
  };

  

  function search() {
    var input = document.getElementById("searchInput");
    searchText = input.value;
    localStorage.setItem('searchText', JSON.stringify(searchText));
    navigateToNewScreen('./searchResults.html')
  }

  function searchNoIndex(path) {
    var input = document.getElementById("searchInput");
    searchText = input.value;
    localStorage.setItem('searchText', JSON.stringify(searchText));
    navigateToNewScreen(path)
  }

  
  
