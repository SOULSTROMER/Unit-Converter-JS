let conversionTable = {
    "KM":1000000,
    "M":1000,
    "CM":10,
    "MM":1
};

let FromInput = document.getElementById("Frominput");
let ToInput = document.getElementById("Toinput");
let FromSelect = document.getElementById("Fromselect");
let ToSelect = document.getElementById("Toselect");
let ConvertButton = document.getElementById("convertButton");

ConvertButton.addEventListener("click",function(){
    console.log(FromSelect.value)
    console.log(ToSelect.value)
    console.log(FromInput.value)
    ToInput.innerText = `${(+(FromInput.value)*conversionTable[FromSelect.value]) / (conversionTable[ToSelect.value])}`});