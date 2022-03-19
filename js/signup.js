'use strict'

document.addEventListener('DOMContentLoaded',function(){

  const form = document.getElementById('form');
  console.log(form)
  form.addEventListener('submit',formSend);

  async function formSend(e){
    e.preventDefault();

    let error = formValidate(form)
  }

  function formValidate(form){
    let error = 0
    let formReq = document.querySelector('_req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input)
      
      if(input.value === ''){
        formAddError(input);
        error++;
      }
    }
  }
  function formAddError(input){
    input.preventElement.classList.add('_error');
    input.classList.add('_error');
    
  }

  function formRemoveError(input){
    input.preventElement.classList.remove('_error');
    input.classList.remove('_error');
    
  }
  


})