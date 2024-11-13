// Number 객체 : 슷자와 관련 된 작업, 자바스크립트는 정수와 실수를 모두 Number로 처리

const x = 10;
console.log(typeof x);
const y = 3.14;
console.log(typeof y);

// Number.parseFloat() : 주어진 문자열을 실수로 변환
console.log(Number.parseFloat("12")); // 12
console.log(Number.parseFloat("12.34")); // 12.34
console.log(Number.parseFloat("12문자열")); // 12
console.log(Number.parseFloat("12 34 56")); // 12
console.log(Number.parseFloat("문자열12")); // NaN

// Number.parseInt() : 주어진 문자열을 정수로 변환

console.log(Number.parseInt("12.34"));

const z = 10;
console.log(typeof z);

const zx = "'";
console.log(typeof zx);

console.log(Number.parseFloat("15.23"));
console.log(Number.parseInt("15.23"));
