// button.js
// import { prices } from "../js/index.js"
// =============== КНОПКА КУПИТЬ ====================
document.querySelectorAll('.card').forEach(item => {
  item.querySelector('a.buy').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(".buying-prod").scrollIntoView({ block: "center", behavior: "smooth" });

    let projName = item.querySelector('.proj-name'),
      prodName = item.querySelector('.prod-name');
      // price = item.querySelector('.price');
    let price = {
      money: item.querySelector('.price .money'),
      coin: item.querySelector('.price .coin'),
    }
    document.querySelector(".project-name").innerHTML = projName.textContent || projName.innerText;
    document.querySelector(".product-name").innerHTML = prodName.textContent || prodName.innerText;
    document.querySelector(".buying-prod .price .money").innerHTML = price.money.textContent || price.money.innerText;
    document.querySelector(".buying-prod .price .coin").innerHTML = price.coin.textContent || price.coin.innerText;

    // console.log(priceS);

    // for (const key in prices) {
    //   if (Object.hasOwnProperty.call(prices, key)) {
    //     const element = prices[key];
    //     if (element.tagID == item.id) {
    //       console.log(element.price, element.coin);

    //     }
    //   }

    // }

    //document.querySelector(".buying-prod .price").appendChild(price);

    document.querySelector(".product-image").src = item.querySelector('.prod-img').src;
    document.querySelector(".buying-prod").classList.remove('anim-no-show');
  });
});
// =============== КНОПКА КУПИТЬ ====================


// const selectgroupItems = document.getElementsByClassName('method-payment');
// if (selectgroupItems.length > 0) {
//   window.addEventListener('click', function (event) {
//     for (let index = 0; index < selectgroupItems.length; index++) {
//       const animItem = selectgroupItems[index];
//       if (animItem.classList.contains("selected")) {
//         animItem.classList.remove("selected");
//       }
//     }
//     event.target.classList.add("selected");
//   });
// }