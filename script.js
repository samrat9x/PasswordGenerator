// selector function
function $(e){
    return document.querySelector(e);
}
// variables
const passwordBox = $('.password');
const eye = $('.eye');
const faCopy = $('.fa-copy');
const btn = $('.btn');
const copy = $('i');
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

window.addEventListener('click',e=>{

    if(e.target.className == 'btn'){
        createPassword();
    }

    if(e.target.className == 'fa-regular fa-eye'){
      passwordBox.setAttribute('type','password');
      eye.innerHTML = '<i class="fa-regular fa-eye-slash">';
      passwordBox.setAttribute('disabled','');
      faCopy.style.display = 'none';
      btn.setAttribute('disabled','');
      }

    if(e.target.className == 'fa-regular fa-eye-slash'){
      passwordBox.setAttribute('type','text');
      eye.innerHTML = '<i class="fa-regular fa-eye">';
      passwordBox.removeAttribute('disabled');
      faCopy.style.display = 'inline';
      btn.removeAttribute('disabled');
    }

    if(e.target.className == 'fa-regular fa-copy'){
        passwordBox.select();
        document.execCommand('copy');
    
    
        copy.setAttribute('class','fa-solid fa-check');
        copy.style.fontSize = '24px';
        copy.style.color = '#019f55';
        btn.setAttribute('disabled','');
    
        setTimeout(e=>{
        
          copy.setAttribute('class','fa-regular fa-copy');
          copy.style.color = '#002339';
          btn.removeAttribute('disabled');
        },1000)
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

