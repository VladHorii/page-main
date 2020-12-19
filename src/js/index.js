
// setTimeout(anim(), 1000);
// function anim() {
//   anim.setAttribute("class", "all _active");
// }
const animItems = document.querySelectorAll('.anim');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      //animItem.classList.add('_active');
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
        alert("1");
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        if (!animItem.classList.contains('anim-no-show')) {
          animItem.classList.add('_active');
        }
        //alert("add");
      }
      else {
        if (!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove("_active");
          //alert("remove");
        }
      }

    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animOnScroll();
  }, 500);
}



// window.addEventListener('scroll', function() {
//   var height = window.pageYOffset || document.documentElement.scrollTop;
//    /*Если сделали скролл на 100px задаём новый класс для header*/
//   if(height > 400){
//     document.getElementById('products').classList.add('_active');
//   } 
//   else{
//   /*Если меньше 100px удаляем класс для header*/
//   document.getElementById('products').classList.remove('_active');
//   }
// });



// document.getElementById("tab-product").onclick = function() {
//   console.log("+");
//   //window.location.hash = '#tab-buy_f';
//   document.getElementById('products').scrollIntoView({block: "end", behavior: "smooth"});

//   //document.getElementById('products').classList.add('_active');
// };

// var elements = [".left", ".center", ".right"];

// for (let index = 0; index < elements.length; index++) {
//   document.querySelector(elements[index]).onmouseover = function() {
//     for (let i = 0; i < elements.length; i++) {
//       if (i!=index) {
//         document.querySelector(elements[i]).style.width = '150px';
//         document.querySelector(elements[i]).style.height = '100px';
//         document.querySelector(elements[i]).style.top = '25px';
//         document.querySelector(elements[i] + " .text").style.fontSize = '15px';
//       }
//     }
//   };
//   document.querySelector(elements[index]).onmouseout = function() {
//     for (let i = 0; i < elements.length; i++) {
//       if (i!=index) {
//         document.querySelector(elements[i]).style.width = '';
//         document.querySelector(elements[i]).style.height = '';
//         document.querySelector(elements[i]).style.top = '';
//         document.querySelector(elements[i] + " .text").style.fontSize = '';
//       }
//     }
//   };
// }

// hideAll();
// function hideAll() {
//   document.querySelector(".buying").style.display = 'none';
// }

// =============== КНОПКА КУПИТЬ ====================


document.querySelectorAll('.card').forEach(item => {
  item.querySelector('a.buy').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(".buying-prod").scrollIntoView({block: "start", behavior: "smooth"});

    // document.querySelector(".buying").style.display = '';
    let projName = item.querySelector('.proj-name'),
        prodName = item.querySelector('.prod-name'),
        price = item.querySelector('.price');
    document.querySelector(".project-name").innerHTML = projName.textContent || projName.innerText;
    document.querySelector(".product-name").innerHTML = prodName.textContent || prodName.innerText;
    document.querySelector(".price h2").innerHTML = price.textContent || price.innerText;
    document.querySelector(".product-image").src = item.querySelector('.prod-img').src;
    document.querySelector(".buying-prod").classList.remove('anim-no-show');
  });
});
// =============== КНОПКА КУПИТЬ ====================
// =============== ЗАКРЫТЬ ВСЕ ФОРМЫ ОПЛАТЫ ====================
// function clousePaymentForm() {
//   document.querySelectorAll('.payment-form').forEach(i => {
//     //i.style.display = "none";
//     i.classList.remove('form-active');
//   });
// }
// =============== Выбор способа оплаты ====================
document.querySelectorAll('.payment-method').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.payment-form').forEach(i => {
      //i.style.display = "none";
      i.classList.remove('form-active');
    });
    //document.querySelector("p.form-title").style.display = 'none';
    document.querySelector("p.form-title").style.opacity = '0';
    //clousePaymentForm();
    document.querySelector(".form-"+item.id).classList.add('form-active');

  });
});

// =============== Выбор способа оплаты ====================

// =============== BUTTON.js ====================
const selectgroupItems = document.getElementsByClassName('method-payment');
if (selectgroupItems.length > 0) {
  window.addEventListener('click', function(event) {
    for (let index = 0; index < selectgroupItems.length; index++) {
      const animItem = selectgroupItems[index];
      if (animItem.classList.contains("selected")) {
        animItem.classList.remove("selected");
      }
    }
    event.target.classList.add("selected");
  });
}

// =============== BUTTON.js ====================

// let myName = "Влад";

// document.querySelectorAll('.table-body-players-card-body').forEach(item => {
//   item.querySelectorAll('.table-body-players-card-body-nick ._nick').forEach(item_nick => {
//     let name = item_nick.textContent || item_nick.innerText;
//     if (name == myName ) {
//       console.log(name);
//       item.querySelectorAll('.table-body-players-card-body-timer div').forEach(item_timer => {
//         let timer = item_timer.textContent || item_timer.innerText;
//         timer = Number(timer);
//         if (timer < 10) {
          
//         }
//       });
//     }
//     // else {
//     //   console.log("Имя не совпало " + name);
//     // }
//   });
// });