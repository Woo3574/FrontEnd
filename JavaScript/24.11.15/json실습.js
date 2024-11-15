// JSON 데이터
const jsonData = `
[
    {
        "name": "안유진",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "가을",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "레이",
        "age": 19,
        "isStudent": true,
        "courses": ["음악", "일본어", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    }
]
`;
// DB에서 데이터를 받아와서 자바스크립트에서 역직렬화해서 HTML에 넘겨줘서 화면을 띄우는방식
// 레스트컨트롤 자바입장에서객체는 어레이리스트
// @@레스트풀API, 비동기통신 공부무조건해야할것@@
// JSON 문자열을 JavaScript 객체로 변환 (역직렬화)

const jsonObject = JSON.parse(jsonData);
console.log("객체로 변환된 데이터:", jsonObject);
const htmlContent = jsonObject
  .map(
    (person) => `
  <div class="person">
      <h2>${person.name}</h2>
      <p>나이: ${person.age}</p>
      <p>학생 여부: ${person.isStudent ? "예" : "아니오"}</p>
      <p>과목: ${person.courses.join(", ")}</p>
      <p>주소: ${person.address.city}, 우편번호: ${person.address.zipcode}</p>
  </div>
`
  )
  .join("");
container.innerHTML = htmlContent;

// const jsonObject = JSON.parse(jsonData);
// const htmlContent = jsonObject.map(
//   (person) => `
//     <div class="person">
//         <h2>${person.name}</h2>
//         <p>나이: ${person.age}</p>
//         <p>학생 여부: ${person.isStudent ? "예" : "아니오"}</p>
//         <p>과목: ${person.courses.join(", ")}</p>
//         <p>주소: ${person.address.city}</p>
//         <p>우편번호: ${person.address.zipcode}</p>
//     </div>
// `
// );

// document.write(htmlContent[0] + htmlContent[1] + htmlContent[2]);
