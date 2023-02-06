const elText = document.querySelector(".text");
const input = document.querySelector('.input');
const elForm = document.querySelector('.form')
function checkPalindrome(evt){
  const elInput = input.value;
 if (elInput.charAt(0) == elInput.at(-1)){
  elText.textContent = 'it is palindrome'
 }else{
  elText.textContent = 'it is not palindrome'
 }
 if (elInput == ''){
  elText.textContent = '';
 }
}

