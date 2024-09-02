const passwordBox = document.querySelector('.password');
const len = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const symbol = '!@#$%^&*()-_=+[]{}|;:,.<>?/~`"';
const number = '0123456789';
const allChars = upperCase + lowerCase + number + symbol;
function createPassword(){
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(len > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copy(){
    passwordBox.select();
    document.execCommand('copy');

    document.querySelector('i').removeAttribute('class');
    document.querySelector('i').setAttribute('class','fa-solid fa-check');
    document.querySelector('i').style.fontSize = '24px';
    document.querySelector('i').style.color = '#019f55';

    setTimeout(e=>{
      document.querySelector('i').removeAttribute('class');
      document.querySelector('i').setAttribute('class','fa-regular fa-copy');
      document.querySelector('i').style.color = '#002339';
    },2000)
}

window.addEventListener('click',e=>{
    if(e.target.className == 'btn'){
        createPassword();
    }
})


// function coffee() {
//     // Get the text field
//     var copyText = document.querySelector(".password");
  
//     // Select the text field
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices
  
//     // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);
    
//     // Alert the copied text
//     alert("Copied the text: " + copyText.value);
//   }

