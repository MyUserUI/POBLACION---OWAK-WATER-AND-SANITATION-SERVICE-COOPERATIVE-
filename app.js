
document.addEventListener("DOMContentLoaded", function () {


// This code block, opening and closing menu
  let menu_btn = document.querySelector('.menu-btn'); 
  let menu_content = document.querySelector('.menu-content');

  menu_btn.addEventListener('click', () => {
    if (menu_content.style.right === '-15rem') {
      menu_content.style.right = '0';
    } else {
      menu_content.style.right = '-15rem';
    }
  });
  

// Close the Paymnet Success
const close_btn = document.querySelector('.close-btn');

function closePayment() {
  const Paymentcontainer = document.querySelector('.paid-container');
  Paymentcontainer.style.display = 'none';

  let credits = document.getElementById('credits');
  let floatingNumber = Math.random() * 10;

  credits.innerHTML = floatingNumber;
}

close_btn.addEventListener('click', closePayment);



// Show the reset password
let forgotpassbtn = document.getElementById('forgot-pass');
let continueBtn = document.querySelector('.continue-btn');
let continueBtn2 = document.querySelector('.continue-btn2');
let continueBtn3 = document.querySelector('.continue-btn3');

let cancelBtn = document.querySelector('.cancel-btn');

function showResetPass() {

  let fpContainer = document.querySelector('.fp-wrapper');
  let fpwContainer = document.querySelector('.forgot-password-container');
  // let dcContainer = document.querySelector('.digit-code-container');
  // let rpContainer = document.querySelector('.reset-pass-container');
  fpContainer.style.display = 'block';
  fpwContainer.style.left = '0';
}

function showDigitCode() {
  let fpwContainer = document.querySelector('.forgot-password-container');
  let dcContainer = document.querySelector('.digit-code-container');

  fpwContainer.style.opacity = '0';
  fpwContainer.style.zIndex = '-99';
  dcContainer.style.opacity = '1';
}

function showResetPassContainer() {
  let dcContainer = document.querySelector('.digit-code-container');
  let rpContainer = document.querySelector('.reset-pass-container');

  dcContainer.style.opacity = '0';
  dcContainer.style.zIndex = '-99';
  rpContainer.style.opacity = '1';
}

function hideResetPass() {
  let rpContainer = document.querySelector('.reset-pass-container');

  rpContainer.style.opacity = '0';
}

function cancelFp() {
  let fpContainer = document.querySelector('.fp-wrapper');

  fpContainer.style.display = 'none';
}

function showForgotPassword() {
  let fpwContainer = document.querySelector('.forgot-password-container');

  fpwContainer.style.display = 'block';
}

forgotpassbtn.addEventListener('click', showResetPass);
forgotpassbtn.addEventListener('click', showForgotPassword);

continueBtn.addEventListener('click', showDigitCode);
continueBtn2.addEventListener('click', showResetPassContainer);
continueBtn3.addEventListener('click', hideResetPass);
continueBtn3.addEventListener('click', resetPasswordCountdown);

cancelBtn.addEventListener('click', cancelFp);

function resetPasswordCountdown() {
  const countdownElement = document.getElementById('fp-countdown');
  let countdownValue = parseInt(countdownElement.innerText, 10);

  if (countdownValue > 0) {
    countdownValue--;
    countdownElement.innerText = countdownValue;
    setTimeout(resetPasswordCountdown, 1000); // Update every 1 second (1000 milliseconds)
  } else {
    // Hide the container when countdown reaches 0
    document.querySelector('.fp-wrapper').style.display = 'none';
    alert('Password Reset Successful');
    location.reload();
  }
}


  // This code block, append an element and the value
  // CWB 
    let number_generator = Math.floor(Math.random() * 1000);
    let cwb = document.querySelector('.cwb');
    let cwb_value = document.createElement('p');

    cwb_value.innerHTML = '&#8369;' + number_generator;
    cwb.appendChild(cwb_value);


  // Code for Vat
    let number_generator_vat = Math.floor(Math.random() * 10.50);
    let vat = document.querySelector('.vat');
    let vat_value = document.createElement('p');

    vat_value.innerHTML = '&#8369;' + number_generator_vat;
    vat.appendChild(vat_value);


  // Code for Subtotal
    let number_generator_subtotal = Math.floor(Math.random() * 100);
    let subtotal = document.querySelector('.subtotal');
    let subtotal_value = document.createElement('p');

    subtotal_value.innerHTML = '&#8369;' + number_generator_subtotal;
    subtotal.appendChild(subtotal_value);


  // Code for Convenience Fee
    let number_generator_cf = Math.floor(Math.random() * 20);
    let cf = document.querySelector('.cf');
    let cf_value = document.createElement('p');

    cf_value.innerHTML = '&#8369;' + number_generator_cf;
    cf.appendChild(cf_value);


  // Total amount
    let total = document.querySelector('.total-due');
    const total_amount = number_generator + number_generator_vat + number_generator_subtotal + number_generator_cf;
    let total_value = document.createElement('p');
    total_value.classList.add('addstyle');

    total_value.innerHTML = '&#8369;' + total_amount;
    total.appendChild(total_value);


  // Due Amount
  const due_amount = document.getElementById('due-amount');
  due_amount.innerHTML = `PHP ${total_amount}`;


  // This code append the 
  const paid_amount = document.querySelector('.paid-amount');
  paid_amount.innerHTML = `PHP ${total_amount}`;


  // Last Steps Append value
  const amount = document.getElementById('amount-due');
  amount.innerHTML = `PHP ${total_amount}`

// End of Appending

// function loadBack() {
//   const loading_screen = document.querySelector('.payment-loader');
//   loading_screen.style.display = 'none';
//   }

// This code disable the submit form auto refresh
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();
});



// This code switch the color of icons in login form upon input active/focus

const user_icon = document.querySelector('.fa-user');
const pass_icon = document.querySelector('.fa-lock');
const input_name = document.querySelector('.input-name');
const input_pass = document.querySelector('.input-pass');

// UserName
function colorIcon() {
  user_icon.style.color = 'var(--clr-gcash-text)';
}

function blurIcon() {
  user_icon.style.color = '';
}

input_name.addEventListener('focus', colorIcon);
input_name.addEventListener('blur', blurIcon);

// Password
function colorIconpass() {
  pass_icon.style.color = 'var(--clr-gcash-text)';
}

function blurIconpass() {
  pass_icon.style.color = '';
}

input_pass.addEventListener('focus', colorIconpass);
input_pass.addEventListener('blur', blurIconpass);


// This show the password hidden
let eye = document.getElementById('eye');

function togglePassword() {
  let password = document.getElementById("password-input");
  let currentType = password.getAttribute("type");
  let newType = (currentType === "password") ? "text" : "password";
  password.setAttribute("type", newType);
}

eye.addEventListener('click', togglePassword);



// This code displays the Gcash Payment upon tap/clicking gcash 

let gc_popup = document.querySelector('.gc-popup');
const gc_container = document.querySelector('.gcash-container');
const back_arrow = document.getElementById('backarrow');

function popup1() {
  gc_container.style.display = 'block';
}

function back() {
  gc_container.style.display = 'none';
}


function updateCountdown3() {
  const countdownElement = document.getElementById('countdown3');
  let countdownValue = parseInt(countdownElement.innerText, 10);

  if (countdownValue > 0) {
    countdownValue--;
    countdownElement.innerText = countdownValue;
    setTimeout(updateCountdown3, 1000); // Update every 1 second (1000 milliseconds)
  } else {
    // Hide the container when countdown reaches 0
    document.querySelector('.payment-loader').style.display = 'none';
  }
}

gc_popup.addEventListener('click', function () {
  setTimeout(updateCountdown3, 1000);
});


back_arrow.addEventListener('click', back);
gc_popup.addEventListener('click', popup1);



// This code displays the Gcash Authenticator upon clicking next

let next_btn = document.querySelector('#next-btn');


function nextShow() {
  let auth_container = document.querySelector('.authentication-container');
  auth_container.style.display = 'block';
  auth_container.style.zIndex = '999999';
}

function authCountdown() {
  const countdownElement = document.getElementById('auth-countdown');
  let countdownValue = parseInt(countdownElement.innerText, 10);

  if (countdownValue > 0) {
    countdownValue--;
    countdownElement.innerText = countdownValue;
    setTimeout(authCountdown, 1000); // Update every 1 second (1000 milliseconds)
  } else {
    // Hide the container when countdown reaches 0
    document.querySelector('.authentication-loader').style.display = 'none';
    let randomCode = Math.floor(100000 + Math.random() * 900000);
    alert(`Your verification code is: ${randomCode}`);
  }
}

next_btn.addEventListener('click', nextShow);
next_btn.addEventListener('click', authCountdown);
next_btn.addEventListener('click', function () {
  setTimeout(loaderTimeout, 2000);
});



// Generate Code
let resendBtn = document.getElementById('resend-btn');
let codeMsg = document.getElementById('code-message');
let countdownElement = document.getElementById('countdown-min');

function resendCodeFunc() {
  let randomCode = Math.floor(100000 + Math.random() * 900000);

  // Display the new verification code
  codeMsg.style.display = 'block';
  alert(`Your new verification code is: ${randomCode}`);
  resendBtn.style.display = 'none';

  // Start the countdown
  startCountdown();
}

function startCountdown() {
  countdownElement.style.display = 'block';
  let countdownValue = parseInt(countdownElement.innerText, 10);

  function updateCountdown() {
    if (countdownValue > 0) {
      countdownValue--;
      countdownElement.innerText = countdownValue;
      setTimeout(updateCountdown, 1000); // Update every 1 second (1000 milliseconds)
    } else {
      // Hide the countdown when it reaches 0
      countdownElement.style.display = 'none';
      // document.getElementById('resend-code').style.display = 'block';
      resendBtn.style.display = 'block'
    }
  }

  // Initial call to start the countdown
  updateCountdown();
}

resendBtn.addEventListener('click', resendCodeFunc);




// This code hide the Gcash Authenticator Container

let back_arrow_2 = document.getElementById('hideback');

function hideNext() {
  let auth_container = document.querySelector('.authentication-container');
  auth_container.style.display = 'none';
}

back_arrow_2.addEventListener('click', hideNext);


// This code display the last steps screen
let submit_btn = document.getElementById('submit-btn');

function showLs() {
  let ls_container = document.querySelector('.ls-container');
  let auth_container = document.querySelector('.authentication-container');
  ls_container.style.display = 'block';
  auth_container.style.display = 'none'; 
}
submit_btn.addEventListener('click', showLs);
submit_btn.addEventListener('click', lsCountdown);



// This code hides the last step screen

let ls_back_arr = document.getElementById('ls-back-arrow');

function hideLs() {

  let auth_container = document.querySelector('.authentication-container');
  let ls_container = document.querySelector('.ls-container');
  ls_container.style.display = 'none';
  auth_container.style.display = 'block'; 
}
ls_back_arr.addEventListener('click', hideLs);


// This code Show the Success Screen
let next_btn_2 = document.getElementById('next-btn-2');
function showSuccess() {
  let sucess_screen = document.querySelector('.sucess-screen-container');
  let ls_container = document.querySelector('.ls-container');
  let auth_container = document.querySelector('.authentication-container');
  let gc_container = document.querySelector('.gcash-container');
 
  gc_container.style.display = 'none';
  auth_container.style.display = 'none';
  ls_container.style.display = 'none';
  sucess_screen.style.display = 'block';
}

next_btn_2.addEventListener('click', showSuccess);


// This Code hides Success Screen
let redirecting_btn = document.querySelector('.redirecting-btn');

function hideAll() {
  let sucess_screen = document.querySelector('.sucess-screen-container');
  let paid_container = document.querySelector('.paid-container');

  sucess_screen.style.display = 'none';
  paid_container.style.display = 'block';
}

redirecting_btn.addEventListener('click', hideAll);
redirecting_btn.addEventListener('click', updateCountdownPaid);




// Function to generate random number
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}


// Function to update the displayed value
function updateValue(element, value) {
  element.innerHTML = '&#8369;' + value;
}


// Function to reset values
function resetValues() {
  // Code for Cwb
  let cwb = document.querySelector('.cwb');
  let cwb_value = cwb.querySelector('p');
  let number_generator = generateRandomNumber(0);
  updateValue(cwb_value, number_generator);

  // Code for Vat
  let vat = document.querySelector('.vat');
  let vat_value = vat.querySelector('p');
  let number_generator_vat = generateRandomNumber(0);
  updateValue(vat_value, number_generator_vat);

  // Code for Subtotal
  let subtotal = document.querySelector('.subtotal');
  let subtotal_value = subtotal.querySelector('p');
  let number_generator_subtotal = generateRandomNumber(0);
  updateValue(subtotal_value, number_generator_subtotal);

  // Code for Convenience Fee
  let cf = document.querySelector('.cf');
  let cf_value = cf.querySelector('p');
  let number_generator_cf = generateRandomNumber(0  );
  updateValue(cf_value, number_generator_cf);

  // Total Amount
  let total = document.querySelector('.total-due');
  let total_value = total.querySelector('p');
  const total_amount = number_generator + number_generator_vat + number_generator_subtotal + number_generator_cf;
  updateValue(total_value, total_amount);

  // Appending Value
  const due_amount = document.getElementById('due-amount');
  due_amount.innerHTML = `PHP ${total_amount}`;

  // Last Steps Append Value
  const amount = document.getElementById('amount-due');
  amount.innerHTML = `PHP ${total_amount}`
}

redirecting_btn.addEventListener('click', resetValues);


// This code append the value of mobile_number input
  let nextBtn = document.querySelector('.next-btn');

function appendNumber() {
  let user_number = document.querySelector('.user-number');
  let limitNumber = document.querySelector('#number-user');
  // let limitValue = limitNumber.value;

  user_number.innerHTML = limitNumber.value;
}

nextBtn.addEventListener('click', appendNumber);


// This code append the input value to name

let login_btn = document.querySelector('.login-btn');

// Append value to paragraph
function appendValue() {
  const user = document.getElementById('user_name');
  let name = document.querySelector('.name-value');

  let userValue = user.value;
  name.innerHTML = userValue;
}

// This code hide the login container
function hideContainer() {
  let app_container = document.querySelector('.app-container');
  app_container.style.display = 'none';

  // Start the countdown after hiding the app_container
  setTimeout(updateCountdown2, 1000);
}

login_btn.addEventListener('click', hideContainer);
login_btn.addEventListener('click', appendValue);


// This code hides the loader upon login in dashboard

function updateCountdown2() {
  const countdownElement = document.getElementById('countdown2');
  let countdownValue = parseInt(countdownElement.innerText, 10);

  if (countdownValue > 0) {
    countdownValue--;
    countdownElement.innerText = countdownValue;
    setTimeout(updateCountdown2, 1000); // Update every 1 second (1000 milliseconds)
  } else {
    // Hide the container when countdown reaches 0
    document.querySelector('.loading-screen-container').style.display = 'none';
  }
}

// This code countdown to 3, and hide the success screen container

function updateCountdown() {
  const countdownElement = document.getElementById('countdown');
  let countdownValue = parseInt(countdownElement.innerText, 10);

  if (countdownValue > 0) {
    countdownValue--;
    countdownElement.innerText = countdownValue;
    setTimeout(updateCountdown, 1000); // Update every 1 second (1000 milliseconds)
  } else {
    // Hide the container when countdown reaches 0
    document.querySelector('.sucess-screen-container').style.display = 'none';


     // Code for Cwb
  let cwb = document.querySelector('.cwb');
  let cwb_value = cwb.querySelector('p');
  let number_generator = generateRandomNumber(0);
  updateValue(cwb_value, number_generator);

  // Code for Vat
  let vat = document.querySelector('.vat');
  let vat_value = vat.querySelector('p');
  let number_generator_vat = generateRandomNumber(0);
  updateValue(vat_value, number_generator_vat);

  // Code for Subtotal
  let subtotal = document.querySelector('.subtotal');
  let subtotal_value = subtotal.querySelector('p');
  let number_generator_subtotal = generateRandomNumber(0);
  updateValue(subtotal_value, number_generator_subtotal);

  // Code for Convenience Fee
  let cf = document.querySelector('.cf');
  let cf_value = cf.querySelector('p');
  let number_generator_cf = generateRandomNumber(0);
  updateValue(cf_value, number_generator_cf);

  // Total Amount
  let total = document.querySelector('.total-due');
  let total_value = total.querySelector('p');
  const total_amount = number_generator + number_generator_vat + number_generator_subtotal + number_generator_cf;
  updateValue(total_value, total_amount);

  // Appending Value
  const due_amount = document.getElementById('due-amount');
  due_amount.innerHTML = `PHP ${total_amount}`;

  // Last Steps Append Value
  const amount = document.getElementById('amount-due');
  amount.innerHTML = `PHP ${total_amount}`
  }

}

// Initial call to start the countdown
next_btn_2.addEventListener('click', function () {
  setTimeout(updateCountdown, 1000);
})


// window.addEventListener('beforeunload', function (event) {
//   event.returnValue = alert('Are you sure you want to leave?');
// });


// This Code Append the mobile number to Payment Success Screen

function appendSuccessNumber() {
  let user_number = document.querySelector('.user-mobile');
  let limitNumber = document.querySelector('#number-user');
  // let limitValue = limitNumber.value;

  user_number.innerHTML = limitNumber.value;
}

appendSuccessNumber();

// Hide the Payment Successful Loader
function updateCountdownPaid() {
  const countdownElement = document.getElementById('paid_countdown');
  let countdownValue = parseInt(countdownElement.innerText, 10);

  if (countdownValue > 0) {
    countdownValue--;
    countdownElement.innerText = countdownValue;
    setTimeout(updateCountdownPaid, 1000); // Update every 1 second (1000 milliseconds)
  } else {
    // Hide the container when countdown reaches 0
    document.querySelector('.paid-loader').style.display = 'none';
  }
};


function lsCountdown() {
  const countdownElement = document.getElementById('ls-countdown');
  let countdownValue = parseInt(countdownElement.innerText, 10);

  if (countdownValue > 0) {
    countdownValue--;
    countdownElement.innerText = countdownValue;
    setTimeout(lsCountdown, 1000); // Update every 1 second (1000 milliseconds)
  } else {
    // Hide the container when countdown reaches 0
    document.querySelector('.ls-loader').style.display = 'none';
  }
}

// Due Dates
let monthRandom = Math.floor(Math.random() * 12) + 1;
let dayRandom = Math.floor(Math.random() * 30) + 1;
let months = document.getElementById('month');
let days = document.getElementById('days');

months.innerHTML = monthRandom;
days.innerHTML = dayRandom;














// End of DOM
})


// This Code limit the number of input in Gcash Code Authenticator

function limitNumberLength(input, maxLength) {

  let limit_num = document.getElementById('limitedNumber');
  limit_num = input.value.toString();

  if (limit_num.length > maxLength) {
    limit_num = limit_num.slice(0, maxLength);
    input.value = limit_num;
  }
}

