const container = document.querySelector('.root');
const formData = document.forms.form;
const form = container.querySelector('#form');
const textField = container.querySelector('#textField');






function getRecuest(){
  return fetch('https://api.kanye.rest')     // не оячень понял как организввать обращение к обстрактному обработчику, поэмтоу решил обратьиться к реальному API 
  .then(res => res.json())
  .then((result) => {
    alert(result.quote) 
  })
  .catch((err) => {
    alert('Ошибка. Запрос не выполнен');
  });
}




function sendDataForm(event){
  event.preventDefault()
    
  const userFormData = JSON.stringify({
    first: formData.elements.el1.value,
    second: formData.elements.el2.value,
    third: formData.elements.el3.value,
    fourth: formData.elements.el4.value,
    fifth: formData.elements.el5.value,
    input1: formData.elements.input_1.value,
    input2: formData.elements.input_2.value
  })
  textField.textContent= userFormData
  getRecuest()         // К сожалению, я не очень понял как обращаться к абстрактному обработчику, поэтому сделал запрос к реальному API
  formData.reset();
}



form.addEventListener('submit', sendDataForm)
