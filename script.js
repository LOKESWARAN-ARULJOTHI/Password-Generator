// Sync password length inputs
const charRange = document.getElementById('charRange');
const charNumber = document.getElementById('charNumber');
const uppercase = document.getElementById('uppercase');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const displayPassword = document.getElementById('password')
const copy = document.getElementById('copy')
const reload = document.getElementById('reload')

const lowercaseCode = arrayFromLowToHigh(97,122)
const uppercaseCode = arrayFromLowToHigh(65,90)
const numberCode = arrayFromLowToHigh(48,57)
const symbolCode = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126))
window.onload = generatePassword
charRange.addEventListener('input',matchValue);
charRange.addEventListener('input',generatePassword);
charNumber.addEventListener('input',matchValue);
charNumber.addEventListener('input',generatePassword);
uppercase.addEventListener('input',generatePassword);
number.addEventListener('input',generatePassword);
symbol.addEventListener('input',generatePassword);
reload.addEventListener('click',generatePassword);  
copy.addEventListener('click',copyPassword);  

function copyPassword(){
    displayPassword.select();
    displayPassword.setSelectionRange(0,50);
    document.execCommand('copy')
}


function matchValue(e){
    const value = e.target.value;
    charRange.value = value;
    charNumber.value = value;
}

function generatePassword(e)
{
    let charCodes = lowercaseCode;
    let passwordlength = charNumber.value;
    let includeUppercase = uppercase.checked;
    let includeNumber = number.checked;
    let includeSymbol = symbol.checked;
    if (includeUppercase) charCodes = charCodes.concat(uppercaseCode)
    if (includeSymbol) charCodes = charCodes.concat(symbolCode)
    if (includeNumber) charCodes = charCodes.concat(numberCode)
    
    let passwordCodes = []
    for (let i=0; i<=passwordlength; i++){
        let characterCode = charCodes[Math.floor(Math.random()*charCodes.length)]
        passwordCodes.push(String.fromCharCode(characterCode));
    }
    password = passwordCodes.join('')
    displayPassword.value = password
}

function arrayFromLowToHigh(low,high){
    const array = [];
    for(let i=low; i <= high; i++){
        array.push(i);
    }
    return array;
}