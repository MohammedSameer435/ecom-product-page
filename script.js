document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 39.99 },
        { id: 3, name: 'Product 3', price: 49.99 },
    ];

    const cart = [];

    const cartItems = document.getElementById("cart-items");
    const productList = document.getElementById('product-list');
    const emptyCartMsg = document.getElementById('empty-cart');
    
    const totalPrice = document.getElementById('total-price');
    const btn = document.getElementById('checkout-btn');
    const carttotalmsg = document.getElementById('cart-total')

    // Render product list
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <span class="product-info">${product.name} - $${product.price.toFixed(2)}</span>
            <button class="add-to-cart" data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (e) => {
        if(e.target.tagName === 'BUTTON') {
            const productid = parseInt(e.target.getAttribute("data-id"))
            const product = products.find(p => p.id=== productid)
            if(product){
                addtocart(product)
            }
        }
    })
    function addtocart(product){
        cart.push(product)
         rendercart()
    }
    function rendercart() {
        cartItems.innerText=''
        let total =0

        if(cart.length){
            emptyCartMsg.classList.add('hidden')
            carttotalmsg.classList.remove('hidden')
             cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                cartItems.appendChild(li);
                total += item.price;
            });
            totalPrice.textContent = `$${total.toFixed(2)}`;
        }else{
            emptyCartMsg.classList.remove('hidden') 
            carttotalmsg.classList.add('hidden');
            totalPrice.textContent = '$0.00';
                       
        }

    }
});
