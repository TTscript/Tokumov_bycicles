const shape = document.querySelector('.shape');
const shapeBottom = document.querySelector('.shape-bottom');
const nameMain = document.querySelector('.shape__enter-name');
const nameBottom = document.querySelector('.shape-bottom__enter-name');
const tel = document.querySelector('.shape__enter-phone');
const telBottom = document.querySelector('.shape-bottom__enter-phone');
const inputs = document.querySelectorAll('.enter-field');

console.log(shape);
console.log(shapeBottom);
console.log(nameMain);
console.log(nameBottom);
console.log(tel);
console.log(telBottom);
console.log(inputs);

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

shape.onsubmit = function() {
  console.log('works');

  let emailVal = nameMain.value,
      phoneVal = tel.value,
      emptyInputs = Array.from(inputs).filter(input => input.value === '');

  inputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('shape__error');
      console.log('input not filled');
    } else {
      input.classList.remove('shape__error');
    }
  });

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }

  if (!validatePhone(phoneVal)) {
    console.log('phone not valid');
    tel.classList.add('shape__error');
    return false;
  } else {
    tel.classList.remove('shape__error');
  }
}

shapeBottom.onsubmit = function() {
  console.log('works');

  let emailVal = nameBottom.value,
      phoneVal = telBottom.value,
      emptyInputs = Array.from(inputs).filter(input => input.value === '');

  inputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('shape-bottom__error');
      console.log('input not filled');
    } else {
      input.classList.remove('shape-bottom__error');
    }
  });

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }

  if (!validatePhone(phoneVal)) {
    console.log('phone not valid');
    telBottom.classList.add('shape-bottom__error');
    return false;
  } else {
    telBottom.classList.remove('shape-bottom__error');
  }
}


