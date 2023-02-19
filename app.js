const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const emailError = document.getElementById('email-error');
const errorIcon = document.querySelector('.error-icon');

const emailRegex =
  /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(emailInput.value)) {
    e.preventDefault();
    emailError.style.display = 'block';
    errorIcon.style.display = 'block';
  } else {
    e.preventDefault();
    emailError.style.display = 'none';
    errorIcon.style.display = 'none';
    emailInput.value = 'Subscribed!';
    console.log(emailInput.value);
  }
});
