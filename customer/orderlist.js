let cartItems = [];

// Define your product data as an array of objects
const products = [
 {
        "id": "3329",
        "name": "pro gas(refill)",
        "price": "ksh1300"
      },
      {
        "id": "d9dc",
        "name": "k gas",
        "price": "ksh1400"
      },
      {
        "id": "e549",
        "name": "pro gas",
        "price": "ksh1300"
      },
      {
        "id": "9d3c",
        "name": "pro gas",
        "price": "ksh1300"
      },
      {
        "id": "d46c",
        "name": "total(refill)",
        "price": "ksh1300"
      },
      {
        "id": "2a05",
        "name": "rubis",
        "price": "ksh2000"
      },
      {
        "id": "3b7e",
        "name": "k gas(refill)",
        "price": "ksh1300"
      },
      {
        "id": "4dad",
        "name": "pro gas",
        "price": "ksh1300"
      },
      {
        "id": "293f",
        "name": "total gas(refill)",
        "price": "ksh1300"
      },
      {
        "id": "dff4",
        "name": "k gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "k gas",
        "price": "ksh1300"
      },
      {
        "id": "dff4",
        "name": "rubis gas",
        "price": "ksh1300"
      },
      {
        "id": "dff4",
        "name": "pro gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "Pika gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "E gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "pro gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "M gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "pro gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "M gas",
        "price": "ksh1500"
      },
      {
        "id": "dff4",
        "name": "pro gas",
        "price": "ksh1300"
      },
      {
        "id": "dff4",
        "name": "total gas",
        "price": "ksh1400"
      },
      {
        "id": "040d",
        "name": "pro gas",
        "price": "ksh1600"
      },
      {
        "id": "43b1",
        "name": "test",
        "price": "15"
      },
      {
        "id": "388a",
        "name": "pro gas",
        "price": "ksh1600"
      },
      {
        "id": "9e87",
        "name": "rubis",
        "price": "ksh1600"
      },
      {
        "id": "d4ce",
        "name": "test",
        "price": "ksh1600"
      },
      {
        "id": "f8f2",
        "name": "k gas",
        "price": "ksh1600"
      },
      {
        "id": "7339",
        "name": "gas burner",
        "price": "ksh300"
      },
      {
        "id": "dc48",
        "name": "gas burner",
        "price": "ksh300"
      },
      {
        "id": "b0af",
        "name": "gas regulator",
        "price": "ks200"
      },
      {
        "id": "168e",
        "name": "total gas",
        "price": "ksh1200"
      },
      {
        "id": "4a06",
        "name": "pro gas",
        "price": "ksh1200"
      },
      {
        "id": "7d66",
        "name": "pro gas",
        "price": "ksh1600",
        "image": {}
      },
      {
        "id": "175d",
        "name": "pro gas",
        "price": "ksh1600",
        "image": {}
      },
      {
        "id": "aead",
        "name": "rubis",
        "price": "ksh1600",
        "image": {}
      },
      {
        "id": "e2f1",
        "name": "E gas",
        "price": "ksh1600",
        "image": {}
      }
    ]


function fetchProducts() {
    // Display products directly from the predefined array
    displayProducts(products);
}

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;
        itemDiv.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = product.name;
        itemDiv.appendChild(name);

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `${product.price}`;
        itemDiv.appendChild(price);

        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.addEventListener('click', () => addToCart(product));
        itemDiv.appendChild(addButton);

        productList.appendChild(itemDiv);
    });
}

function addToCart(product) {
    cartItems.push(product);
    updateCartIcon();
}

function updateCartIcon() {
    const cartIcon = document.querySelector('.icon-cart span');
    cartIcon.textContent = cartItems.length;
}

function updateCartDisplay() {
    const cartItemList = document.getElementById('cartItemList');
    cartItemList.innerHTML = '';
    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('item');

        const name = document.createElement('h2');
        name.textContent = item.name;
        cartItemDiv.appendChild(name);

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `${item.price}`;
        cartItemDiv.appendChild(price);

        cartItemList.appendChild(cartItemDiv);
    });
}

function initEventListeners() {
    document.querySelector('.icon-cart').addEventListener('click', handleViewCart);
    document.getElementById('closeCartViewBtn').addEventListener('click', handleCloseCart);
    document.querySelector('.checkOut').addEventListener('click', () => {
        const checkoutContainer = document.querySelector('.checkout-container');
        checkoutContainer.style.display = 'block'; 
    });
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
}

function handleViewCart() {
    const shoppingCart = document.querySelector('.cartTab');
    shoppingCart.classList.remove('hidden');
    document.body.classList.add('showCart');
    updateCartDisplay();
}

function handleCloseCart() {
    const shoppingCart = document.querySelector('.cartTab');
    shoppingCart.classList.add('hidden');
    document.body.classList.remove('showCart');
}

function handleCheckout(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    
    if (name === '' || email === '' || address === '') {
        alert('Please fill out all fields.');
        return;
    }
    
    alert('Order placed successfully!');
    cartItems = [];
    updateCartIcon();
    updateCartDisplay();
    handleCloseCart();
}

fetchProducts();
initEventListeners();
