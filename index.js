var cart = [];

function getCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100+1)});
 return `${item} has been added to your cart.`;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
  }
    result = 'In your cart, you have ';
    for (let i = 0; i < cart.length-1; i++) {
      result += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    result += `and ${cart[-1].itemName} at $${cart[-1].itemName}.`;
  }
  return result;
}

function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  if (item in cart) {
    delete cart.
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
