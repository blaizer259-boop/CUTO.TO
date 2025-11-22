// script.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const authForm = document.getElementById('auth-form');
    const formTitle = document.getElementById('form-title');
    const formDescription = document.getElementById('form-description');
    const authBtn = document.getElementById('auth-btn');
    const switchToSignup = document.getElementById('switch-to-signup');
    const loginFooter = document.getElementById('login-footer');
    const emailField = document.getElementById('email-field');
    const confirmPasswordField = document.getElementById('confirm-password-field');
    
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const rememberMeCheckbox = document.getElementById('remember-me');
    
    // Form state
    let isLoginMode = true;
    
    // Switch between login and signup
    switchToSignup.addEventListener('click', function(e) {
        e.preventDefault();
        toggleAuthMode();
    });
    
    function toggleAuthMode() {
        isLoginMode = !isLoginMode;
        
        if (isLoginMode) {
            // Switch to login
            formTitle.textContent = 'Come In 😒';
            formDescription.textContent = 'Welcome To Home of Movies.';
            authBtn.textContent = 'LOGIN';
            switchToSignup.textContent = 'Sign up';
            switchToSignup.parentElement.innerHTML = 'Don\'t have an account? <a href="#" id="switch-to-signup">Sign up</a>';
            emailField.style.display = 'none';
            confirmPasswordField.style.display = 'none';
            loginFooter.style.display = 'flex';
            
            // Clear additional fields
            emailInput.value = '';
            confirmPasswordInput.value = '';
        } else {
            // Switch to signup
            formTitle.textContent = 'Join Us 🚀';
            formDescription.textContent = 'Create Your Movie Account.';
            authBtn.textContent = 'SIGN UP';
            switchToSignup.textContent = 'Login';
            switchToSignup.parentElement.innerHTML = 'Already have an account? <a href="#" id="switch-to-signup">Login</a>';
            emailField.style.display = 'block';
            confirmPasswordField.style.display = 'block';
            loginFooter.style.display = 'none';
        }
        
        // Re-attach event listener to the new switch link
        document.getElementById('switch-to-signup').addEventListener('click', function(e) {
            e.preventDefault();
            toggleAuthMode();
        });
    }
    
    // Form submission
    authForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (isLoginMode) {
            handleLogin();
        } else {
            handleSignup();
        }
    });
    
    function handleLogin() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        const rememberMe = rememberMeCheckbox.checked;
        
        // Basic validation
        if (!username || !password) {
            showMessage('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate login process
        showMessage('Logging in...', 'info');
        
        // In a real app, you would send this to your backend
        setTimeout(() => {
            showMessage('Login successful!', 'success');
            // Redirect or perform other actions after successful login
        }, 1500);
    }
    
    function handleSignup() {
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            showMessage('Please fill in all fields', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showMessage('Passwords do not match', 'error');
            return;
        }
        
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters', 'error');
            return;
        }
        
        // Simulate signup process
        showMessage('Creating account...', 'info');
        
        // In a real app, you would send this to your backend
        setTimeout(() => {
            showMessage('Account created successfully!', 'success');
            // Optionally switch to login mode after successful signup
            setTimeout(() => {
                toggleAuthMode();
            }, 2000);
        }, 1500);
    }
    
    function showMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message form-message-${type}`;
        messageEl.textContent = message;
        
        // Style the message
        messageEl.style.cssText = `
            padding: 10px;
            margin: 10px 0;
            border-radius: 6px;
            text-align: center;
            font-size: 14px;
            animation: fadeIn 0.3s ease-out;
        `;
        
        if (type === 'error') {
            messageEl.style.backgroundColor = 'rgba(220, 53, 69, 0.2)';
            messageEl.style.border = '1px solid rgba(220, 53, 69, 0.5)';
            messageEl.style.color = '#f8d7da';
        } else if (type === 'success') {
            messageEl.style.backgroundColor = 'rgba(40, 167, 69, 0.2)';
            messageEl.style.border = '1px solid rgba(40, 167, 69, 0.5)';
            messageEl.style.color = '#d4edda';
        } else {
            messageEl.style.backgroundColor = 'rgba(23, 162, 184, 0.2)';
            messageEl.style.border = '1px solid rgba(23, 162, 184, 0.5)';
            messageEl.style.color = '#d1ecf1';
        }
        
        // Insert message before the form
        authForm.parentNode.insertBefore(messageEl, authForm);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.style.opacity = '0';
                messageEl.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    if (messageEl.parentNode) {
                        messageEl.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // Add interactive effects to form inputs
    const inputs = document.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Add ripple effect to auth button
    authBtn.addEventListener('click', function(e) {
        // Ripple effect is handled by CSS, but we can add additional visual feedback
        if (isLoginMode) {
            this.style.background = 'linear-gradient(135deg, rgba(221, 132, 72, 0.9), rgba(221, 132, 72, 0.7))';
        } else {
            this.style.background = 'linear-gradient(135deg, rgba(72, 221, 132, 0.9), rgba(72, 187, 221, 0.7))';
        }
        
        setTimeout(() => {
            if (isLoginMode) {
                this.style.background = 'linear-gradient(135deg, var(--electric-border-color), rgba(221, 132, 72, 0.8))';
            } else {
                this.style.background = 'linear-gradient(135deg, var(--electric-border-color), rgba(221, 132, 72, 0.8))';
            }
        }, 300);
    });
});