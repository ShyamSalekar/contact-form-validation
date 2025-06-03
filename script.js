const form = document.getElementById('contact-form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual form submission

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMsg.textContent = '';

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name';
    valid = false;
  }

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Please enter your email';
    valid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address';
    valid = false;
  }

  // Message validation
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Please enter your message';
    valid = false;
  }

  // If all fields are valid, show success message
  if (valid) {
    successMsg.textContent = 'Thank you! Your message has been received.';
    form.reset();
  }
});
