
// =============== Выбор способа оплаты ====================
document.querySelectorAll('.payment-method').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector("p.form-title").style.opacity = '0';

    document.querySelectorAll('.payment-method._active').forEach(i => {
      i.classList.remove('_active');
    });

    let form = document.querySelector(".form-" + item.id).classList;

    if (form.contains('form-active')) {
      form.remove('form-active');
      item.classList.remove("_active");
    }
    else {
      document.querySelectorAll('.payment-form.form-active').forEach(i => {
        i.classList.remove('form-active');
      });
      form.add('form-active');
      item.classList.add("_active");
    }
  });
});
// =============== Выбор способа оплаты ====================

// =============== Установка цен на товар ====================
export let prices = {
  Arizona: {
    price: 399,
    coin: 99,
    tagID: "prod-arz",
  },
  Rodina: {
    price: 399,
    coin: 99,
    tagID: "prod-rrp",
  },
}

for (const key in prices) {
  if (Object.hasOwnProperty.call(prices, key)) {
    const element = prices[key];
    document.querySelector(`.products .card#${element.tagID} .money`).innerHTML = element.price || 0;
    document.querySelector(`.products .card#${element.tagID} .coin`).innerHTML = element.coin || 0;
  }
}

// // Эту залупу я сделать так и не смог, по этому буду говногодить(я так считаю) c tagID
// document.querySelectorAll('.products .card').forEach(item => {
//   console.log(item.id);
//   item.querySelector(`#${item.id} .money`).innerHTML = prices.Arizona.price || 0;
//   item.querySelector(`#${item.id} .coin`).innerHTML = prices.Arizona.coin || 0;
// });



// =============== Установка цен на товар ====================