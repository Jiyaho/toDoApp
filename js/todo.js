const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";
toDoForm.setAttribute("class","toDoInputBoxPosition");

let toDos = [];
// toDos는 항상 빈 array로 시작한다. 유저가 이전에 저장한 데이터들을 불러오기 위해 업데이트가 가능한 let으로 변수 선언

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // localStorage에 todo를 저장하는데, 데이터를 Array형식으로 저장하기 위해, JSON.stiringify 함수를 통해 모든 유형의 코드를 string으로 취급되게 함
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // 클릭 event가 일어난 삭제버튼이 target이 되고 해당 버튼의 부모 element인 <li>를 지워주는 코드
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // filter 함수를 이용하여 toDo의 id값이 다르면(false) 남기고, 같으면(true) 삭제하는 코드,
    // toDo.id는 String type, li.id는 number type이기 때문에 문자열 인자를 파싱하는 parseInt 코드 추가.
    saveToDos();
    // 삭제한 것을 제외하고 이전에 저장된 todo 데이터를 다시 가져오기 위한 코드
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.setAttribute("class","toDoListStyle");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.setAttribute("class","toDoButtonStyle")
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    // html element를 JS에서 생성하여 추가해는 코드 createElement
    // li의 자식 element로 span과 button을 추가해주고 위 코드들을 todo list 구역 아래에 표출되도록 함
    // 표출된 todo 마다 삭제버튼 X를 붙여주고, 유저가 삭제버튼 클릭 시 내용이 지워지도록하는 deleteToDo 함수를 삽입
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // <form>의 기본동작인 submit 후 새로고침하는 event를 막아주는 코드
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // newTodo에는 유저가 입력한 toDoInput의 value를 담아가고, toDoInput 박스의 value값은 지워준다. newTodo에는 아무런 영향 없음
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };
    // 유저가 입력한 newTodo 각각에 고유한 id값을 부여하여 딕셔너리 형태로 저장하는 코드. 각각의 데이터를 명확하게 분류하기 위해 id값을 부여.
    // Date.now는 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 반환하는 함수이다.
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // localStorage에서 가져온 String 유형의 값을 JSON.parse를 통해 JS object인 Array 형식으로 변경/파싱해주는 코드
    toDos = parsedToDos;
    // 항상 비어있는 상태로 시작하는 array인 toDos에 이전에 저장한 todo들이 있다면 업데이트 해 준다. 
    parsedToDos.forEach(paintToDo);
    // array 형식의 object에는 forEach 함수 사용 가능. forEach는 array 각각의 item에 대해 1개의 함수를 실행하게 해주는 코드
    // 유저가 입력한 값을 화면에 표출하는 paintToDo 함수를 forEach의 argument로 받는다. 
    // cf. item은 JS에서 기본 제공하는 argument로, array 안의 각각의 item을 받는 argument이다. 따라서 forEach함수와 유용하게 사용 가능
}
