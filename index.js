
/**
 * Return a cryptographically secure random integer in [0, max).
 * Uses rejection sampling against crypto.getRandomValues so the
 * result is uniformly distributed (unlike Math.random(), which is
 * a fast, predictable PRNG and unsuitable for anything security-related).
 */
function secureRandomInt(max) {
    const range = Math.floor((0xFFFFFFFF + 1) / max) * max;
    const arr = new Uint32Array(1);
    let value;
    do {
        crypto.getRandomValues(arr);
        value = arr[0];
    } while (value >= range); // reject values that would bias the result
    return value % max;
}

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
        return `(Password length must be at least 1 character)`;
    }

    const len = parseInt(length, 10);
    if (!Number.isInteger(len) || len <= 0) {
        return `(Enter a valid password length)`;
    }

    for (let i = 0; i < len; i++){
        password += allowedChars[secureRandomInt(allowedChars.length)];
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
};
