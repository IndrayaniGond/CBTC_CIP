let cart = [];
let orders = [];

function addToCart(productId) {
    const products = {
        1: { id: 1, name: 'Product 1', price: 10.00 },
        2: { id: 2, name: 'Product 2', price: 20.00 }
    };

    const product = products[productId];
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += product.price;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const order = {
        id: orders.length + 1,
        items: [...cart],
        total: cart.reduce((sum, product) => sum + product.price, 0)
    };

    orders.push(order);
    cart = [];
    updateCart();
    updateOrders();
    alert('Thank you for your purchase! Your order has been placed.');
}

function updateOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';

    orders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = `Order #${order.id} - Total: $${order.total.toFixed(2)}`;
        orderList.appendChild(li);
    });
}
