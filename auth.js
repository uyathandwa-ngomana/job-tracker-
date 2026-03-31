// 1. Select the Registration elements (if they exist on the page)
const regBtn = document.getElementById('register-btn');
const regUsernameInput = document.getElementById('reg-username');
const regPasswordInput = document.getElementById('reg-password');

// 2. Select the Login elements (if they exist on the page)
const loginBtn = document.getElementById('login-btn');
const loginUsernameInput = document.getElementById('login-username');
const loginPasswordInput = document.getElementById('login-password');

// --- REGISTRATION LOGIC ---
if (regBtn) {
    regBtn.addEventListener('click', function() {
        const username = regUsernameInput.value;
        const password = regPasswordInput.value;

        if (username === '' || password === '') {
            alert("Please fill in all fields.");
            return;
        }

        // Save user to LocalStorage
        localStorage.setItem('user_username', username);
        localStorage.setItem('user_password', password);

        alert("Account created successfully! Now you can login.");
        window.location.href = 'login.html'; // Redirect to login page
    });
}

// --- LOGIN LOGIC ---
if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        const username = loginUsernameInput.value;
        const password = loginPasswordInput.value;

        // Get saved user from LocalStorage
        const savedUsername = localStorage.getItem('user_username');
        const savedPassword = localStorage.getItem('user_password');

        // Check if username and password match
        if (username === savedUsername && password === savedPassword) {
            alert("Login successful! Welcome back.");
            window.location.href = 'index.html'; // Redirect to the main tracker
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
}
