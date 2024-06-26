document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const productImage = document.getElementById('productImage').value || ''; // Ensure productImage is defined

  const product = {
      name: productName,
      price: productPrice,
      image: productImage
  };

  fetch('http://localhost:4000/products', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          alert('Product added successfully!');

          // Clear input fields
          document.getElementById('productName').value = '';
          document.getElementById('productPrice').value = '';
          document.getElementById('productImage').value = '';

          // Refresh product list
          refreshProductList();
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Failed to add product. Please try again later.');
      });
});

function refreshProductList() {
  // Fetch products from database (db.json) using JSON Server
  fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(products => {
          const productList = document.getElementById('productList');
          productList.innerHTML = '';
          products.forEach(product => {
              const li = document.createElement('li');
              li.textContent = `${product.name} - Ksh ${product.price}`; // Replace $ with Ksh
              productList.appendChild(li);
          });
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Failed to load products. Please try again later.');
      });
}

// Event listener for navigation to home page
document.getElementById('goToHomePage').addEventListener('click', function() {
  window.location.href = '../customer/home.html';
});
