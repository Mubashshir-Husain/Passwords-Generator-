let inputslider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// Showing input sloider value
sliderValue.textContent = inputSlider.value;

const range = () => {
    sliderValue.textContent = inputSlider.value;
};

inputSlider.addEventListener('input', range);

genBtn.addEventListener('click', ()=>{
passBox.value = genaretePassword();
})

let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumber = "0123456789";
let allSymbol ="!@#$%^&*";

function genaretePassword(){
    let genPassword ="";

    let allChar="";
    
    allChar += lowercase.checked ? lowerChar : "";
    allChar += uppercase.checked ? upperChar  : "";
    allChar +=  numbers.checked ? allNumber: "";
    allChar += symbols.checked ? allSymbol : "";
    
if (allChar == "" || allChar.length == 0){
     
    return genPassword;
}

let i = 1;
while (i<=inputslider.value){
     genPassword +=  allChar.charAt(Math.floor(Math.random() *  allChar.length));
     i++;
}
     return genPassword;
}

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";

    setTimeout(()=>{
        copyIcon.innerHTML = "content_copy";
    }, 2500);
}
});