function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Handle login form
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simple validation
    if (!username || !password) {
        showError('login-error-message', 'Harap isi semua field');
        return;
    }

    // Simulate login process
    showError('login-error-message', '');

    // Here you would typically send data to server for actual authentication
    console.log('Login attempt:', { username, password });

    // Simulate success and redirect to index.html
    alert('Login berhasil! Anda akan dialihkan ke halaman utama.');
    window.location.href = 'index.html'; // Redirect ke index.html
});

// Handle register form
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Validation
    if (!username || !email || !password || !confirmPassword) {
        showError('register-error-message', 'Harap isi semua field');
        return;
    }

    if (password !== confirmPassword) {
        showError('register-error-message', 'Kata sandi dan konfirmasi tidak cocok');
        return;
    }

    if (password.length < 6) {
        showError('register-error-message', 'Kata sandi harus minimal 6 karakter');
        return;
    }

    // Clear error
    showError('register-error-message', '');

    // Here you would typically send data to server for user registration
    console.log('Register attempt:', { username, email, password });

    // Simulate success
    alert('Pendaftaran berhasil! Silakan masuk dengan akun baru Anda.');
    showSection('login-section'); // Arahkan kembali ke halaman login
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (message) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    } else {
        errorElement.classList.remove('show');
    }
}

// Add smooth transitions for inputs
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});