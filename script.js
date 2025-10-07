const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a request to the backend API to authenticate the user
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            // User authenticated successfully, redirect to dashboard
            window.location.href = '/dashboard';
        } else {
            // Authentication failed, display error message
            alert(data.message);
        }
    })
    .catch((error) => {
        console.error(error);
    });
});

