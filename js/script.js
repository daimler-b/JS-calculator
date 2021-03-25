window.onload = clearScreenAll;

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

// Показать историю
function showHistory(){
    document.getElementById("wind_hist").classList.toggle("active");
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



// Добавление метода onclick к кнопкам
document.getElementById("hist").onclick = showHistory;
document.getElementById("clear_all").onclick = clearScreenAll;
document.getElementById("clear_elem").onclick = back;

document.getElementById("degree").onclick = function() { addValue(" ^ "); }
document.getElementById("root").onclick = getSquare;
document.getElementById("precent").onclick = function() { addValue(" % "); }
document.getElementById("division").onclick = function() { addValue(" / "); }

document.getElementById("seven").onclick = function() { addValue("7"); }
document.getElementById("eight").onclick = function() { addValue("8"); }
document.getElementById("nine").onclick = function() { addValue("9"); }
document.getElementById("multip").onclick = function() { addValue(" * "); }

document.getElementById("four").onclick = function() { addValue("4"); }
document.getElementById("five").onclick = function() { addValue("5"); }
document.getElementById("six").onclick = function() { addValue("6"); }
document.getElementById("subtrac").onclick = function() { addValue(" - "); }

document.getElementById("one").onclick = function() { addValue("1"); }
document.getElementById("two").onclick = function() { addValue("2"); }
document.getElementById("three").onclick = function() { addValue("3"); }
document.getElementById("addit").onclick = function() { addValue(" + "); }

document.getElementById("sign").onclick = replaceSign;
document.getElementById("zero").onclick = function() { addValue("0"); }
document.getElementById("dot").onclick = function() { addValue("."); }
document.getElementById("equal").onclick = viewResult;





