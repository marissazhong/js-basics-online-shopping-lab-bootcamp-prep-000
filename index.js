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
  result = 'In your cart, you have ';
  for (let i = 0; i < cart.length-1; i++) {
    
  }
  result += cart[-1].
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
