  function navigateToNewScreen(page) {
    // Perform any necessary actions before navigating
  
    // Redirect to the new screen
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

  let cart = [];
  if (localStorage.getItem('cart') !== null) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  document.getElementById("nItems").innerHTML = cart.length;
  console.log(cart.length);
  
  // Function to add an item to the cart
  function addToCart(item) {
    // Push the item to the cart array
    cart.push(items[item]);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById("nItems").innerHTML = cart.length;
    console.log(cart.length);
  }

  function search() {
    var input = document.getElementById("searchInput");
    searchText = input.value;
    localStorage.setItem('searchText', JSON.stringify(searchText));
    navigateToNewScreen('./searchResults.html')
  }

  function searchNoIndex() {
    var input = document.getElementById("searchInput");
    searchText = input.value;
    localStorage.setItem('searchText', JSON.stringify(searchText));
    navigateToNewScreen('./searchResults.html')
  }

  
  
