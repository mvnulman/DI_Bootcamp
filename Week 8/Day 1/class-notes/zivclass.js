const email = document.getElementById('mail');

email.addEventListener('input', () => {
  if(email.validity.typeMismatch){
    email.setCustomValidity('Error in email')
  }
  else {
    email.setCustomValidity('Good job')
  }
})