// 3개의 수를 입력 받아서 가장 큰수와 작은 수를 화면에 출력하기
// prompt로 입력 받은 값은 문자열 이므로 숫자로 변경하기 위해서는
// Number()함수로 형을 변경해야 함.

num1 = prompt(" 첫번째 수를 입력하세요 : ");
num2 = prompt(" 두번째 수를 입력하세요 : ");
num3 = prompt(" 세번째 수를 입력하세요 : ");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

const lage = Math.max(num1, num2, num3);
const small = Math.min(num1, num2, num3);
document.write(
  "<h3>가장큰수는 " + lage + "</h3>" + "<br>가장 작은수는 " + small + "입니다."
);
