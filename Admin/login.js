document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate username and password
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }

       
        console.log('Username:', username);
        console.log('Password:', password);

        
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        
        alert('Login successful!');
       
         window.location.href = './admin.html';
    });
});
