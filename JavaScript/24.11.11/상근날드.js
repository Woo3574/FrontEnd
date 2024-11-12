// prompt로 연속해서 햄버거 3개 가격과 음료 2개의 가격을 입력 받음
// - 햄버거 3개 중 가장 싼 가격을 선택하고 음료둘 중 싼 음료의 가격을 합산하고 여기서 50원 할인
// 결과를 웹화면에 이쁘게 출력

// let hamburger1 = prompt("햄버거1 의 가격 입력 : ");
// let hamburger2 = prompt("햄버거2 의 가격 입력 : ");
// let hamburger3 = prompt("햄버거3 의 가격 입력 : ");

// let drink1 = prompt("음료수1 의 가격 입력 : ");
// let drink2 = prompt("음료수2 의 가격 입력 : ");

// let cheapBurger = Math.min(hamburger1, hamburger2, hamburger3);
// let cheapDrink = Math.min(drink1, drink2);

// let fianalSet = cheapBurger + cheapDrink - 50;
// // document.write(fianalSet + "원");

// const section = document.querySelector("section");
// const inputArr = section.querySelectorAll("input");
// const button = section.querySelector("button");
// button.onclick = foo;

// function foo() {
//   let count = 0;
//   const burgers = [];
//   const drinks = [];
//   for (const item of inputArr) {
//     if (count < 3) {
//       burgers[count] = item.value.trim();
//     } else {
//       drinks[count - 3] = item.value.trim();
//     }
//     count++;
//   }
// }
// alert(
//   "가장 저렴한 조합은 " +
//     (Math.min(burgers[0], burgers[1], burgers[2]) +
//       Math.min(drinks[0], drinks[1], drinks[2]) -
//       50) +
//     "원 입니다."
// );

function getPrice() {
  let menu = [];

  for (let i = 0; i < 5; i++) {
    menu[i] = Number(document.getElementById("menu" + (i + 1)).value);
    console.log(menu[i]);
  }

  let minB = menu[0];
  let minD = menu[3];
  for (let i = 0; i < menu.length; i++) {
    if (i < 3 && minB > menu[i]) minB = menu[i];
    if (i > 2 && minD > menu[i]) minD = menu[i];
  }
  document.getElementById("value").innerHTML = minB + minD - 50 + "원"; //  .innerHTML = minB + minD - 50 + "원 이게 html  value옆 p값에자리가짐
}
