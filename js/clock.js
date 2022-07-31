// Intervals, Timeout and Dates
// Interval: 매번 일어나야 하는 무언가를 말함. ex: 매 2초
// Timeout: 특정 시간 뒤 1번만 일어남.
// Date: 현재 날짜, 시간 등과 관련된 JS에서 기본 제공해주는 Object로 new Date().getHours() 와 같은 형태로 사용한다. 
const clock = document.querySelector("h2#clock");
clock.setAttribute("class","clockStyle");
const newDate = document.querySelector("h3#date");
newDate.setAttribute("class","dateStyle");
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

function getClock() {
    const date = new Date()
    // new Date(): 현재 날짜나 시간에 대한 정보를 가지고 있는 Object

    const years = String(date.getFullYear());
    const months = String(monthNames[date.getMonth()]);
    const dates = String(date.getDate());
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // padStart(String.length, "추가할 문자")로 구성하여 초 단위가 2자리의 문자열로 표출되도록 함.(초 단위를 1이 아닌 01로 표출) String의 유형만 적용 가능.


    clock.innerText = (`${hours}:${minutes}:${seconds}`);
    newDate.innerText = (`${dates} / ${months} / ${years}`);
}

getClock()
// Website가 load되자마자 즉시 getClock()을 실행하고 매초마다 실행되도록 하기위해 쓴 코드(이 코드가 없다면 date는 페이지 load가 끝난 후 1초 뒤부터 시작된다.)

setInterval(getClock, 1000);
// setInterval(getClock, 5000); // 5초마다 getClock()가 실행됨
// setTimeout(getClock, 5000); // 5초 뒤에 1번만 getClock()가 실행됨.
// setInterval()와 setTimeout()은 2개의 argument(인자)를 받는다. ex: setInterval(실행하고자하는 함수, 호출되는 함수의 간격(milliseconds))
// 1000 ms(milliseconds) = 1초
