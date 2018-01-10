  let userNumber = document.querySelector('.numberInput')
  let confirmation = document.querySelector('.conf')

  function squared(num) {
    return num * num;
  }

  function cubed(num) {
    return num * num * num;
  }


  userNumber.onchange = function() {
    let num = userNumber.value;
    if (isNaN(num)) {
      confirmation.textContent = "Please enter a number.";
    } else {
      confirmation.textContent = "Thank you. So " + num + " squared is " + squared(num) +
      ", and " + num + " cubed is " + cubed(num) + ". ";
    }
  }
