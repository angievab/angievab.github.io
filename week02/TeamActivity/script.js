function submit () {
    let text =  document.getElementById("text").value;
    document.getElementById("readback").innerHTML = text;
}

function call() {
    let num = document.getElementById("numbers").value;
    document.getElementById("total").innerHTML = getNum;
}
function getNum(num) {
    let total = 0;
    for (let n = 0; n< num; n++) {
        total += n;
    }
    return total;
}

function addNum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let num3 = num1 + num2;
    document.getElementById("num3").innerHTML = num3;
}