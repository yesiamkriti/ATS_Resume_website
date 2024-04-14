document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');

    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });
});
