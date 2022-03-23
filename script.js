const slider = document.querySelector('#slider');
const priceText = document.querySelector('.price-text span');
const pageviewText = document.querySelector('.card-title');
const checkbox = document.querySelector('#mycheckbox');

const monthly_plan = {
  '8': '10k pageviews',
  '12': '50k pageviews',
  '16': '100k pageviews',
  '24': '500k pageviews',
  '36': '1m pageviews'
}

function giveDiscount(price, discount) {
  let sum = (price * discount) / 100;
  let finalPrice = price - sum;
  return finalPrice;
}

slider.addEventListener('input', function () {

  switch (this.valueAsNumber) {
    case 0:
      this.stepUp(2);
      break;
    case 4:
      this.stepUp(1);
      break;
    case 20:
      this.stepUp(1);
      break;
    case 28:
      this.stepUp(2);
      break; 
    case 32:
      this.stepUp(1);
      break;
  }

  if (checkbox.checked) {
        priceText.textContent = giveDiscount(this.valueAsNumber, 25);
  } 
  else {
      priceText.textContent = this.valueAsNumber;
  }
    pageviewText.textContent = monthly_plan[this.value];
})