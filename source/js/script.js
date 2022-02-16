'use strict';
const time = document.querySelector('.header__date');

const getNextMonday = () => {
  const date = new Date();

  while (true) {
    if (date.getDay() === 1) {
      return date;
    }
    date.setDate(date.getDate() + 1);
  }
};

const showDate = (date) => {
  const year = String(date.getFullYear())
    .slice(2);
  const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : `${date.getMonth() + 1}`;
  const day = `${date.getDate()}`;

  time.textContent = `${day}.${month}.${year}`;
};

showDate(getNextMonday());
