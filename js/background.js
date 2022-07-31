const images = ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg", "07.jpeg", "08.jpeg", "09.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// images리스트에 담겨있는 img파일들을 랜덤으로 표출하기위한 코드

const bgImage = document.createElement("img");
// html element를 JS에서 생성해주는 createElement함수 사용
bgImage.setAttribute("class","bgImageStyle");

bgImage.src = `img/${chosenImage}`;
// img 폴더 안에 있는 image파일들을 Math.random을 이용하여 무작위로 표출

document.body.appendChild(bgImage)
// index.html 파일의 body에 bgImage를 추가해주는 코드
// appendChild는 body의 맨 아랫줄에 추가된다. 맨 윗줄에 추가하려면 prependChild를 사용하면 됨
