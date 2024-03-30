document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    let registeredUsers = []; // Array to store registered users

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        // Your signup validation logic here
        if (password === confirmPassword) {
            registeredUsers.push({ username: email, password: password }); // Storing user credentials (simulated)
            
            // Show success message for account creation
            alert('Account created successfully!');

            // Clear signup form fields
            signupForm.reset();
        } else {
            alert('Passwords do not match');
        }
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Placeholder login validation logic
        login(username, password);
    });

    function login(username, password) {
        // Simulated login logic
        const user = registeredUsers.find(user => user.username === username && user.password === password);
        if (user) {
            alert('Login successful');
            // Log login data to console
            console.log('Login successful with username:', username, 'and password:', password);
            // Redirect to home page after successful login
            window.location.href = './home.html';
        } else {
            alert('Login attempt failed. Please check your username and password.');
        }
    }
});
