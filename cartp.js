var divElement = document.getElementById('cart-box');
var items = LocalCart.getLocalCartItems();

if (items === null) {
  divElement.innerHTML = "No items in the cart.";
} else {
  var cartItems = [];

  for (const [key, value] of items.entries()) {
    let price = value.price * value.quantity;
    price = Math.round(price * 100) / 100;

    cartItems.push({
      name: value.name,
      description: value.desc,
      image: value.img,
      quantity: value.quantity,
      price: price
    });
  }

  var total = 0;

  var cartHTML = cartItems.map((item) => {
    total += item.price;
    return `
      <div class="cart-item">
        <img src="${item.image}">
        <div class="details">
          <h3>${item.name}</h3>
          <p>
            ${item.description}
            <span class="quantity">Quantity: ${item.quantity}</span>
            <span class="price">Price: $ ${item.price}</span>
          </p>
        </div>
      </div>
    `;
  }).join('');

  // Calculate tax and delivery
  const tax = total * 0.05;
  const delivery = 20;
  total = total + tax + delivery;
  total = Math.round(total * 100) / 100;

  divElement.innerHTML = `
    <div class="cart-wrapper">
      ${cartHTML}
    </div>
    <div class="subtotal">
      SubTotal: $${total}<br>
      (Tax: $${tax}, Delivery: $${delivery})
    </div>
  `;
}