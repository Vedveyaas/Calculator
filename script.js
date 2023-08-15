let result = document.getElementById("result");

//clear  all values entered.
function ClearALL() {
    result.value = "";
}

//display the clicked button value. 
function display(value) {
    result.value += value;
    document.getElementById("result").classList.add("display-color");
}


//calculate the value entered in display-box.
function calculate() {
    let s = result.value;
    let r = eval(s);
    result.value = r;
}

//clear a single value on display-box
function backspace() {
    let del = result.value;
    result.value = del.substr(0, del.length - 1);
}

//for single point in a number
// let pointclicked = false;
// document.getElementById("point").addEventListener("click", () => {
//     if (result != ".") {
//         if (pointclicked == false) {
//             result += ".";
//         }
//         else {
//             result = ".";
//         }
//     }
// }
// )
// document.getElementById("point").addEventListener("click", () => {
//     if (result != ".") {
//         if (pointclicked == false) {
//             result += ".";
//         }
//         else {
//             result = ".";
//         }
//     }
// }
// )


