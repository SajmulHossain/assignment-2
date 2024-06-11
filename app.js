document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { img: 'image/1.png', name: 'Gyro Sandwich', rating: 4.9, price: 15.00 },
        { img: 'image/2.png', name: 'Enchilade', rating: 5.00, price: 25.50 },
        { img: 'image/3.png', name: 'Green Beans', rating: 4.9, price: 12.00 },
        { img: 'image/4.png', name: 'Pizza', rating: 5.00, price: 18.50 },
        { img: 'image/5.png', name: 'Chicken Pot Pie', rating: 4.9, price: 25.00 },
        { img: 'image/6.png', name: 'Green Salad', rating: 4.9, price: 15.00 },
        { img: 'image/1.png', name: 'Gyro Sandwich', rating: 4.9, price: 15.00 },
        { img: 'image/2.png', name: 'Enchilade', rating: 5.00, price: 25.50 },
        { img: 'image/3.png', name: 'Green Beans', rating: 4.9, price: 12.00 },
        { img: 'image/4.png', name: 'Pizza', rating: 5.00, price: 18.50 },
        { img: 'image/5.png', name: 'Chicken Pot Pie', rating: 4.9, price: 25.00 },
        { img: 'image/6.png', name: 'Green Salad', rating: 4.9, price: 15.00 },
    ];

    let productsVisible = 6;
    const productContainer = document.getElementById('product');
    const addProductBtn = document.getElementById('add-product-btn');
    const cartCounter = document.querySelector('.number p');
    const cart = document.querySelector('.cart');

    function createProductItem(product) {
        const productItem = document.createElement('div');
        productItem.className = 'product-items';

        const productImage = document.createElement('img');
        productImage.src = product.img;
        productImage.alt = product.name;

        const productDetail = document.createElement('div');
        productDetail.className = 'product-detail';

        const productDesc = document.createElement('div');
        productDesc.className = 'product-desc';

        const productTitle = document.createElement('h4');
        productTitle.textContent = product.name;

        const productRating = document.createElement('p');
        const starIcon = document.createElement('i');
        starIcon.className = 'fa-solid fa-star';
        productRating.appendChild(starIcon);
        productRating.innerHTML += ` ${product.rating}`;

        const priceDiv = document.createElement('div');
        priceDiv.className = 'price';

        const cartButton = document.createElement('button');
        cartButton.className = 'cart-btn';
        cartButton.textContent = 'Add To Cart';
        cartButton.onclick = () => { addToCart(product); };

        const priceTag = document.createElement('p');
        priceTag.textContent = `$${product.price.toFixed(2)}`;

        productDesc.appendChild(productTitle);
        productDesc.appendChild(productRating);

        priceDiv.appendChild(cartButton);
        priceDiv.appendChild(priceTag);

        productDetail.appendChild(productDesc);
        productDetail.appendChild(priceDiv);

        productItem.appendChild(productImage);
        productItem.appendChild(productDetail);

        return productItem;
    }

    function renderProducts() {
        productContainer.innerHTML = '';
        for (let i = 0; i < productsVisible; i++) {
            const productItem = createProductItem(products[i]);
            productContainer.appendChild(productItem);
        }
    }

    function toggleProducts() {
        if (productsVisible === 6) {
            productsVisible = 12;
            addProductBtn.innerHTML = 'Hide Products &nbsp; &nbsp; <div class="left-arrow">&#x276E;</div>';
        } else {
            productsVisible = 6;
            addProductBtn.innerHTML = 'See More Products &nbsp; &nbsp; <div class="right-arrow">&#x276F;</div>';
        }
        renderProducts();
    }

    function addToCart(product) {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        alert(`${product.name} added to cart!`);
        updateCartCount();
        renderCart();
    }

    function updateCartCount() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartCounter.textContent = cartItems.length;
    }

    function renderCart() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cart.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.textContent = item.name;
            cart.appendChild(cartItem);
        });
    }

    addProductBtn.addEventListener('click', toggleProducts);

    renderProducts();
    updateCartCount();
    renderCart();
});

function message() {
    const email = document.getElementById('email').value;
    const messageDiv = document.querySelector('.message');

    if (email === '' || email === undefined || email === null) {
        messageDiv.innerHTML = 'Your subscription is not completed. <br> Please give a valid email';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.innerHTML = 'Your subscription is successfully completed';
        messageDiv.style.color = 'green';
    }
}