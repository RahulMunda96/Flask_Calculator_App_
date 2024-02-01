
const buttonsE1 = document.querySelectorAll("button");
const inputfield = document.getElementById("res");
for(let i=0;i<buttonsE1.length;i++){
    buttonsE1[i].addEventListener("click",()=>{
        const buttonValue = buttonsE1[i].textContent;
        if(buttonValue === "C"){
            clearResult()
        }
        else if(buttonValue === "="){
            calcResult();
        }
        else{
            appendValue(buttonValue);
        }
    });
}
function clearResult(){
   inputfield.value = "";
}
function calcResult(){
   inputfield.value = eval(inputfield.value);
}
function appendValue(buttonValue){
    inputfield.value += buttonValue;
}