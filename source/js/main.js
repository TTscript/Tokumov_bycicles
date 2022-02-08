/*jshint esversion: 6 */
// BURGER MENU

const burgerClosed = document.querySelector('.burger-closed');
const burgerOpen = document.querySelector('.burger-open');
const burgerTop = document.querySelector('.burger-closed__top-line');
const burgerBottom = document.querySelector('.burger-closed__bottom-line');
const burgerMiddle = document.querySelector('.burger-closed__middle-line');
const pageHeader = document.querySelector('.page-header');
const navigationItem = document.querySelectorAll('.page-header__navigation-item');
const navItemArray = Array.from(navigationItem);
const burgerMenuItems = Array.from(document.querySelectorAll('.burger-open__list-item-wrapper'));

let isOpen = false;
burgerClosed.classList.add('burger-closed--change-display');
burgerOpen.classList.add('burger-open--appear');
pageHeader.classList.remove('page-header--background-color');
navItemArray.forEach((item) => {
  item.classList.add('page-header__navigation-item--disappear');
});

burgerOpen.classList.add('burger-open__action');

burgerClosed.addEventListener('click', () => {
  if (!isOpen) {
    isOpen = true;
  } else {
    isOpen = false;
  }

  burgerOpen.classList.toggle('burger-open__action');
  burgerTop.classList.toggle('burger-closed__top-line--transform');
  burgerBottom.classList.toggle('burger-closed__bottom-line--transform');
  burgerMiddle.classList.toggle('visually-hidden');
  burgerClosed.classList.toggle('burger-closed--background-color');

  if (isOpen) {
    window.addEventListener('scroll', disableScroll);
  } else {
    window.removeEventListener('scroll', disableScroll);
  }

  burgerMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
      burgerOpen.classList.toggle('burger-open__action');
      burgerTop.classList.toggle('burger-closed__top-line--transform');
      burgerBottom.classList.toggle('burger-closed__bottom-line--transform');
      burgerMiddle.classList.toggle('visually-hidden');
      burgerClosed.classList.toggle('burger-closed--background-color');
    });
  });
});

function disableScroll() {
  window.scrollTo(0, 0);
}

//FORM VALIDATION

const shape = document.querySelector('.shape');
const shapeBottom = document.querySelector('.shape-bottom');
const userName = document.querySelector('#user-name');
const nameWrapper = document.querySelector('.shape__enter-name');
const tel = document.querySelector('#user-phone');
const telWrapper = document.querySelector('.shape__enter-phone');
const userNameBottom = document.querySelector('#user-name-bottom');
const nameBottomWrapper = document.querySelector('.shape-bottom__enter-name');
const telBottom = document.querySelector('#user-phone-bottom');
const telBottomWrapper = document.querySelector('.shape-bottom__enter-phone');

function validateName(name) {
  const re = /^[a-z\d.]{5,}$/i;
  return re.test(String(name));
}

function validatePhone(phone) {
  const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  return re.test(String(phone));
}

shape.onsubmit = function() {
  const nameVal = userName.value,
    phoneVal = tel.value;

  if (nameVal === '') {
    nameWrapper.classList.add('shape__error');
    return false;
  } else {
    nameWrapper.classList.remove('shape__error');
  }

  if (!validateName(nameVal)) {
    nameWrapper.classList.add('shape__error');
    return false;
  } else {
    nameWrapper.classList.remove('shape__error');
  }

  if (phoneVal === '') {
    telWrapper.classList.add('shape__error');
    return false;
  } else {
    telWrapper.classList.remove('shape__error');
  }

  if (!validatePhone(phoneVal)) {
    telWrapper.classList.add('shape__error');
    return false;
  } else {
    telWrapper.classList.remove('shape__error');
  }
};


shapeBottom.onsubmit = function() {
  const nameValBottom = userNameBottom.value,
    phoneValBottom = telBottom.value;

  if (nameValBottom === '') {
    nameBottomWrapper.classList.add('shape-bottom__error');
    return false;
  } else {
    nameBottomWrapper.classList.remove('shape-bottom__error');
  }

  if (!validateName(nameValBottom)) {
    nameBottomWrapper.classList.add('shape-bottom__error');
    return false;
  } else {
    nameBottomWrapper.classList.remove('shape-bottom__error');
  }

  if (phoneValBottom === '') {
    telBottomWrapper.classList.add('shape-bottom__error');
    return false;
  } else {
    telBottomWrapper.classList.remove('shape-bottom__error');
  }

  if (!validatePhone(phoneValBottom)) {
    telBottomWrapper.classList.add('shape-bottom__error');
    return false;
  } else {
    telBottomWrapper.classList.remove('shape-bottom__error');
  }
};


