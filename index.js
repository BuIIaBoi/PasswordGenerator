
function passwordGenerator(length, lowerCase, upperCase, includeNums, includeSymbols){
    
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Numbers = '1234567890';
    const Symbols = '~!@#$%^&*()_+`-={}|[]\\:";,./<>?';

    let allowedChars = '';
    let password = '';

    allowedChars += lowerCase ? lowerCaseChars : "";
    allowedChars += upperCase ? upperCaseChars : "";
    allowedChars += includeNums ? Numbers : "";
    allowedChars += includeSymbols ? Symbols : "";

    if(allowedChars.length <= 0){
        return `(Password lenght must be atleast 1 character)`;
    }
    else if (allowedChars.length >= 1){
        for (let i = 0; i<length; i++){
            let random = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[random];
        };
    }
    return password;
};

const btn = document.getElementById('btn');

btn.onclick = function(){
    const pass_len = document.getElementById('pass_len').value;
    const lowerCase = document.getElementById('lowerCase').checked;
    const upperCase = document.getElementById('upperCase').checked;
    const includeNums = document.getElementById('includeNums').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const h1 = document.getElementById('h1');

    let password = passwordGenerator(pass_len, lowerCase, upperCase, includeNums, includeSymbols);

    h1.textContent = `Generated Password: ${password}`;
    console.log( document.getElementById('lowerCase').checked);
};