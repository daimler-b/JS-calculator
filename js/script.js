// Добавление элемента в Input
function addValue(elem) {
    if(elem !== "."){
        document.getElementById("result").value += elem;
    }else{
        str = document.getElementById("result").value;
        let val = str.toString().slice(-1);
        if(val != "."){
            document.getElementById("result").value += elem;
        }
    }
}

// Создать строку
function createString(elem){
    document.getElementById("paragr").innerHTML += elem;
}

// Показать журнал
function showHistory(){
    let selectors = document.querySelectorAll('.openLog');
    for(let sel of selectors){
        sel.classList.toggle('active');
    } 
}

// Очистить журнал 
function clearLog(){
    document.getElementById("paragr").innerHTML = "";
}

// Удаление всех элементов
function clearScreenAll() {
    document.getElementById("result").value = "";
}

// Удалить один элемент
function back(){
    let val = document.getElementById("result").value;
    document.getElementById("result").value = val.substring(0, val.length-1);
}

// Возведение в степень
function elevate(){
    let str = document.getElementById("result").value;
    let xor = str.indexOf("^");
    let a = str.substring(0,xor);
    let b = str.substring(xor+1, str.length);
    document.getElementById("result").value = Math.pow(a,b);
}

// Квадратный корень
function getSquare(){

    document.getElementById("paragr").innerHTML += "&#8730";

    let elem = document.getElementById("result").value;
    let result = Math.sqrt(elem);
   
    elem +=  "=" + result;
    document.getElementById("result").value = result;

    createString(elem);
    createString("</br>"); 
}

// Процент от числа
function getPercent(){
    let str = document.getElementById("result").value;
    let xor = str.indexOf("%");
    let a = str.substring(0,xor);
    let b = str.substring(xor+1, str.length);
    let res = b / 100 * a;
    document.getElementById("result").value = res;
}

// Поменять знак на противоположный
function replaceSign(){
    let elem = document.getElementById("result").value;
    if (elem != 0 && elem){
        elem = -elem;
    }
    document.getElementById("result").value = elem;

    let elem_log = document.getElementById("result").value;
    if (elem_log != 0){
        elem_log = -elem_log;
    }

}

// Получение результата
    function viewResult(){

    let str = document.getElementById("result").value;    

    let substr = document.getElementById("result").value.indexOf("^");
    if(substr !== -1){
        elevate();
    }
    
    let substr_2 = document.getElementById("result").value.indexOf("%");
    if(substr_2 !== -1){
        getPercent();
    }

    let result = eval(document.getElementById("result").value);
    result = +result.toFixed(11);
    document.getElementById("result").value = result;
    
    if(str != result){
        str = str + " =" + result;
        createString(str);
        createString("</br>");
    }

}

function initiate(){
    clearScreenAll();

    let functionsBtn = [
        showHistory,
        clearScreenAll,
        back,
        clearLog,
        function(){addValue(" ^ ");}, 
        getSquare,
        function(){addValue(" % ");},
        function(){addValue(" / ");},
        function(){addValue("7");},
        function(){addValue("8");},
        function(){addValue("9");},
        function(){addValue(" * ");},
        function(){addValue("4");},
        function(){addValue("5");},
        function(){addValue("6");},
        function(){addValue(" - ");},
        function(){addValue("1");},
        function(){addValue("2");},
        function(){addValue("3");},
        function(){addValue(" + ");},
        replaceSign,
        function(){addValue("0");},
        function(){addValue(".");},
        viewResult,
    ]

    let buttons = document.querySelectorAll('.btn');
    for (let i = 0; i < buttons.length; i++){
        buttons[i].onclick = functionsBtn[i];
    }

}
window.onload = initiate;





