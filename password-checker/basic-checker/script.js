// Get elements from the DOM
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength');
const message = document.getElementById('message');

// Criteria elements for live validation
const criteria = {
    length: document.getElementById('length'),
    uppercase: document.getElementById('uppercase'),
    lowercase: document.getElementById('lowercase'),
    number: document.getElementById('number'),
    symbol: document.getElementById('symbol')
};

// Listen to input event on password field
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let score = 0;

    // Check each criterion and mark as valid if passed
    criteria.length.classList.toggle('valid', password.length >= 8);
    if (password.length >= 8) score++;

    criteria.uppercase.classList.toggle('valid', /[A-Z]/.test(password));
    if (/[A-Z]/.test(password)) score++;

    criteria.lowercase.classList.toggle('valid', /[a-z]/.test(password));
    if (/[a-z]/.test(password)) score++;

    criteria.number.classList.toggle('valid', /[0-9]/.test(password));
    if (/[0-9]/.test(password)) score++;

    criteria.symbol.classList.toggle('valid', /[^A-Za-z0-9]/.test(password));
    if (/[^A-Za-z0-9]/.test(password)) score++;

    // Update strength bar width based on score
    const percent = (score / 5) * 100;
    strengthBar.style.width = percent + '%';

    // Display strength message
    if (score <= 2) message.textContent = 'Weak';
    else if (score === 3 || score === 4) message.textContent = 'Medium';
    else message.textContent = 'Strong';
});