
let cart = [];
let total = 0;


function addToCart(price) {
    cart.push(price);
    total += price;
    updateCartUI();
}


function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedPrice = cart[index];
        cart.splice(index, 1);
        total -= removedPrice;
        updateCartUI();
    }
}


function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Producto ${index + 1}: $${item.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        li.appendChild(removeButton);
        cartItems.appendChild(li);

        
        removeButton.addEventListener('click', function() {
            removeFromCart(index);
        });
    });

    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = total.toFixed(2);
}


const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const price = parseFloat(this.getAttribute('data-price'));
        addToCart(price);
    });
});


const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;

    
     emailMessage = `Hola ${firstName} ${lastName},\n\nProductos en el carrito:\n`;

    cart.forEach((item, index) => {
        emailMessage += `Producto ${index + 1}: $${item.toFixed(2)}\n`;
    });

    emailMessage += `\nTotal: $${total.toFixed(2)}`;

    
    console.log('Mensaje del correo electrónico:');
    console.log(emailMessage)
    alert('Pedido realizado. Se ha enviado un correo electrónico de confirmación.');

    
    cart = [];
    total = 0;
    updateCartUI();
    checkoutForm.reset();
});

