// Function to add an item to the cart
function addToCart(item) {
    // Push the item to the cart array
    for (itemIdx in materiais) {
        if(materiais[itemIdx].id == item){
            cart.push(materiais[itemIdx]);
            localStorage.setItem('cart', JSON.stringify(cart));
            document.getElementById("nItems").innerHTML = cart.length;
            console.log(cart.length);
        }
    }
}

function removeFromCart(id) {
    for (itemIdx in cart) {
        item = cart[itemIdx]
        if (item.id == id) {
            cart.splice(itemIdx, 1)
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.reload()
        }
    }
}
