const input = document.querySelector('.input');
const elText = document.querySelector('.text');

input.addEventListener('input' ,  function(evt){
    const elInput = input.value;
    if (elInput % 100 !==0 && elInput % 4 ==0 || elInput % 400 == 0){
        elText.textContent = 'Bu kabisa yili'
    }else {
        elText.textContent = 'Bu kabisa yili emas'
    }
    if(elInput == ''){
        elText.textContent = ''
    }    
})                                                                                                      

