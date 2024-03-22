// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (username === 'sandra' && password === '123') {
        alert('Login successful!');
        window.location.href = '../customer/home.html'; 
    } else {
        alert('Login failed. Please check your username and password.');
    }

    // Clear form fields
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});
