var itemListHtml = ""
var total = 0.0
for (itemIdx in cart) {
    item = cart[itemIdx]
    itemListHtml = itemListHtml + `
        <div class="item-cart" style="width: 400px; margin-top: 30px;">
            <img src="../images/icons/remove_shopping_cart.png" alt="Item 1 Image" width="40" height="40"  onclick="removeFromCart('${item[4]}')">
            <div class="item-details-material" style="margin-top: 0; margin-bottom: 0; margin-right: 10px; padding: 0;">
                <h4 style="margin: 0; font-size: 30px; color: #6C63FF;">${item[0]}</h4>
                <h4 style="margin: 0; font-size: 30px;">${item[1]}€</h4>
                <h6 style="margin: 0;">${item[2]}</h6>
                <p style="margin: 0;">${item[3]}</p>
            </div>
        </div>
    `
    total = total + parseFloat(item[1])
}
document.getElementById("itemList").innerHTML = itemListHtml
document.getElementById("nArtigos").innerHTML = String(cart.length) + " artigos"
document.getElementById("subtotal").innerHTML = "Subtotal do carrinho: " + String(total) + "€"
document.getElementById("total").innerHTML = "Total: " + String(total) + "€"
document.getElementById("popupTotal").innerHTML = "Total: " + String(total) + "€"

function removeFromCart(id) {
    for (itemIdx in cart) {
        item = cart[itemIdx]
        if (item[4] == id) {
            cart.splice(itemIdx, 1)
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.reload()
        }
    }

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

closeBtn.addEventListener('click', closePopup);  
  
  