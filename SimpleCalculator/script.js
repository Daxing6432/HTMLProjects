let number = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equals");
let n1 = document.querySelector(".n1"); 
let n2 = document.querySelector(".n2");
let n3 = document.querySelector(".n3");

let x = "";
let y = "";

n1.innerHTML = "";
n2.innerHTML = "";
 n3.innerHTML= "";

function addNumber() {
    n3.innerHTML += this.textContent;
}

function operate(){
    if(n1.textContent === ""){
        if(n3.textContent === "" && this.textContent === "-"){
            n3.innerHTML += "-";
        }
        if(n3.textContent != "-"){
            n1.innerHTML = n3.textContent;
            n2.innerHTML = this.textContent;
            n3.innerHTML = "";
        }
    }
    else{
        return
    }
}
function clearScreen(){
    n1.innerHTML="";
    n2.innerHTML="";
    n3.innerHTML="";
}
number.forEach((button) => {
    button.addEventListener("click", addNumber);
});



operator.forEach((button) => {
    button.addEventListener("click", operate);
})

clear.addEventListener("click", clearScreen);

equals.addEventListener("click", calculate);