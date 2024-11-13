// 배열에서 사용할수 있는 속성과 메서드 활용하기
// 배열의 메서드는 크게 파괴적 메서드와 비파괴적 메서드가 있음 (비파괴적 메서드는 불변성의 원칙과 관련이 있음)

// 배열을 순회하는 비파괴적 메서드를 사용
const arr = [10, 20, 30, 40, 50];
arr.forEach((e) => {
  console.log(e);
});

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 리터러블(반복) 객체의 요소를 순회할 때 사용
for (let e of arr) {
  console.log(e);
}

// toString() : 배열 안의 모든 문자열을 쉼표를 이용해 모두 결합해 하나의 문자열로 반환
console.log(arr.toString());

//파괴적 메서드
// join() : 배열안의 모든 문자열을 지정한 문자를 이용해 모두 결합
const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];
console.log(fruits.join("*"));

// pop() : 스택 자료 구조에서 마지막 데이터를 제거하고, 반환, 배열의 내용이 변경됨으로 파괴적 메서드
console.log(fruits.pop());

// push() :  배열에 새로운 요소를 추가
fruits.push("Watermelon");
console.log(fruits);

// shift() : 배열에서 첫번째 요소를 제거하고, 반환
console.log(fruits.shift());
console.log(fruits);

// unshift() : 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
console.log(fruits.unshift("Lemon"));
console.log(fruits);

// 배열의 요소 변경
fruits[3] = "Peach";
console.log(fruits);
