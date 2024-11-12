// CallBack 연습
function taewooCry() {
  console.log("(┬┬﹏┬┬)오늘은 너무슬프다");
}

function taewooHappy() {
  console.log("(●'◡'●)오늘 하루는 너무나 햄볶는다!");
}

function taewooAngry() {
  console.log("ಠ_ಠ 오늘은 누군갈 혼내주고싶다!");
}

function taewoosMoodConditionCheck(mood, cryAt, happyAt, angryAt) {
  if (mood == "cry") cryAt();
  else if (mood == "happy") happyAt();
  else if (mood == "angry") angryAt();
  else {
    ("잘못된 값을 입력하셨습니다.");
  }
}

taewoosMoodConditionCheck("angry", taewooCry, taewooHappy, taewooAngry);
taewoosMoodConditionCheck(
  "cry",
  () => {
    console.log("오늘은 너무나도 (╯°□°）╯︵ ┻━┻ 이런기분이야");
  },
  taewooHappy,
  taewooAngry
);
// CallBack 연습

// TimerSetting And Callback 연습

const sell = (price, quantity, number, callback) => {
  console.log(
    "손님이 떡볶이 " +
      quantity +
      "인분어치를 주문하셨습니다. 손님이 있다가 가지러 오신다하여 연락처 " +
      number +
      "를 남겨두고 갔습니다."
  );
  setTimeout(() => {
    let total = price * quantity;
    callback(total);
  }, 3000);
};
const pay = (total) => {
  console.log("총 지불하신 금액은" + total + "입니다");
};

sell(2500, 2, "010-7126-3574", pay);
