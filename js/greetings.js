const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
// string만으로 구성된 변수는 관습적으로 대문자로 만들기도 한다. "hidden"은 style에서 Display 값을 none으로 표출한다, 즉 화면에서 숨기는 기능이다.
const USERNAME_KEY = "username";
// string으로 구성된 코드를 반복적으로 사용하여야 할 경우, 변수로 선언하여 코드 상에 변수를 입력하는 것이 코드 에러(오타 등의 문제)를 줄여줄 수 있다.
// 왜냐하면, string이 오타가 나도 JS에선 지적해줄 수 없으나, 변수명이 오타가 나면 JS가 지적하기때문에 에러의 포인트를 쉽게 찾을 수 있다.
greeting.setAttribute("class","greetingStyle");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

// onLoginSubmit(event) 함수: cf. (event)라는 argument는 JS에서 기본제공해주는 argumnet이다. (item) argument도 마찬가지.
// 1.유저가 로그인 input box에 value를 입력 후 submit하면 preventDefault 함수로 submit event의 기본 동작인 새로고침 기능을 없애준다.
// 2.입력 후 Login input box를 화면에서 숨기고 <h1>에 `hello, ${username}`라는 메세지를 띄운다. (username = input box의 value)
// 3.username을 저장하기위해 localStorage라는 API 사용 - localStorage.setItem("key", "value")
//     : localstorage는 브라우저 콘솔창의 Application - Local Storage를 통해 확인 가능
// 4.localStorage가 비어있으면(username 미입력 시) <form>을 보여주고, localStorage가 입력되면(username 입력 시) <form>이 아닌 <h1>을 보여준다.
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
// paintGreeting 함수: 1. 비어있는 <h1>요소 안에 `Hello, ${userInputName}`라는 텍스트를 추가해준다.
// 2. <h1> 요소로부터 "hidden"이라는 클래스명을 제거해준다.


const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
    // show the form: localstorage에 유저 정보가 없을때(savedUsername의 값이 null인 경우)
    // <form>의 class인 hidden이 지워지고, <form>에 event를 추가하여 submit을 기다린다. 
} else {
    paintGreetings(savedUsername);
    // show the greeting (greeting은 <h1>의 id 값): localstorage에 유저 정보가 있을때
}