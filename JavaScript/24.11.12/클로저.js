// 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할 수있는 메커니즘
function Counter() {
  let counter = 0;
  return {
    // 'increment' 메소드는 클로저를 통해 'count' 변수에 접근할 수 있습니다.
    increment: function () {
      count++;
      console.log(count);
    },

    // 'decrement' 메소드는 클로저를 통해 'count' 변수에 접근할 수 있습니다.
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const myCounter = Counter(); // 'Counter' 함수를 통해 객체를 생성합니다.

myCounter.increment(); // 출력: 1
myCounter.increment(); // 출력: 2
myCounter.decrement(); // 출력: 1

// 'count' 변수는 외부에서 직접 접근할 수 없습니다.
console.log(myCounter.count); // 출력: undefined
