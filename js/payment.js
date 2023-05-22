var itemListHtml = ""
var total = 0.0
for (itemIdx in cart) {
    item = cart[itemIdx]
    itemListHtml = itemListHtml + `
        <div class="item-cart" style="width: 400px; margin-top: 30px;">
            <img src="../images/icons/remove_shopping_cart.png" alt="Item 1 Image" width="40" height="40"  onclick="removeFromCart('${item.id}')">
            <div class="item-details-material" style="margin-top: 0; margin-bottom: 0; margin-right: 10px; padding: 0;">
                <h4 style="margin: 0; font-size: 30px; color: #6C63FF;">${item.name}</h4>
                <h4 style="margin: 0; font-size: 30px;">€${item.price}</h4>
                <h6 style="margin: 0;">${item.authorFormat}</h6>
                <p style="margin: 0;">${item.description}</p>
            </div>
        </div>
    `
    total = total + parseFloat(item.price)
}
document.getElementById("itemList").innerHTML = itemListHtml
document.getElementById("nArtigos").innerHTML = String(cart.length) + " artigos"
document.getElementById("subtotal").innerHTML = "Subtotal do carrinho: €" + String(total)
document.getElementById("total").innerHTML = "Total: €" + String(total)
document.getElementById("popupTotal").innerHTML = "Total: €"+ String(total)

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
  