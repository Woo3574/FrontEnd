import React, { useState } from "react";

// 앱은 화면을 그려주는 리소스(버튼, 인풋 박스 등등)가 이미 폰에 설치되어있음
// 앱은 수정하거나 이미지를 업데이트하거나,바꿀려면 앱을 다시 배포를 해야함
// 앱은 주로 시스템의 기능을 많이 사용하는 경우는 앱이 유리
// 앱은 화면을 그려주는 요소가 html, css로 구성되어 있지 않음,(독자적인 툴이있음)
// 앱은 그려주는 리소스가 폰에 설치되어있다

// 웹은 배포가 자유롭다
// 웹은 안드로이드, ios 동시개발 시 개발 부담이 적음(운영체제가 무엇이든 상관없다)
// 앱속에 웹을 집어넣는 툴 = web view프로그램 (하이브리드 앱)
const data = [
  {
    id: 100,
    userName: "천지훈",
    email: "1000won@gamail.com",
  },
  {
    id: 200,
    userName: "백마리",
    email: "2000won@gmail.com",
  },
  {
    id: 300,
    userName: "서민혁",
    email: "3000won@gmail.com",
  },
];

const UserList = () => {
  return (
    <>
      <div>
        <p>ID: {data[0].id}</p>
        <p>name: {data[0].userName}</p>
        <p>email: {data[0].email}</p>
      </div>
      <div>
        <p>ID: {data[1].id}</p>
        <p>name: {data[1].userName}</p>
        <p>email: {data[1].email}</p>
      </div>
      <div>
        <p>ID: {data[2].id}</p>
        <p>name: {data[2].userName}</p>
        <p>email: {data[2].email}</p>
      </div>
    </>
  );
};

export default UserList;
