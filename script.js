const form = document.querySelector('form');
const card_1 = document.querySelector('.card');
const card_2 = document.querySelector('.card-2');
const emailInput = document.getElementById('email');
const strongElement = document.querySelector('strong');
const dismissBtn = document.getElementById('dismiss');
const span = document.querySelector('span');

function validateEmail() {
    var email = emailInput.value;
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (regex.test(email)) {
        card_1.classList.add('hide');
        card_2.classList.remove('hide'); 
        strongElement.innerHTML = email;
        emailInput.style.borderColor = "black";
        span.classList.add('hide');
        
    } else {
      emailInput.classList.add('wrong');
      span.classList.remove('hide');
      span.style.color = 'rgb(240, 10, 10)';
    }
  }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();     
});

dismissBtn.addEventListener("click", () => {
    card_2.classList.add('hide');
        card_1.classList.remove('hide');
});