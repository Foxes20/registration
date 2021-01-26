      if (confirm(" вам есть 18 лет?")) {
   alert("удачной регистрации");
   } else {


   let elem = document.getElementById('forms');
  elem.style.display = 'none'; 

   }
 

(function () {
   let input = document.querySelectorAll('.valid'),
      button = document.querySelector('#button'),
      timer = 0;


   for(let i = 0, max = input.length; i < max; i++) {
      input[i].addEventListener('blur', checkText);
      input[i].dataset.index = i;     
   }


   button.addEventListener('click', sendForm);

   function checkText() {


      if (this.value.length < 1) {     
         this.dataset.check = 'false';       
         getStylePrimary(this);        
      }



      switch (this.dataset.index) { 
         case '0':
         
            checkName(this);  
            break;
         case '1':


            checkSurname(this);  
            break; 
         case '2':


            checkEmail(this);  
            break;
         case '3':


            checkPassword(this); 
            break;
         case '4':


            checkPassworD(this); 
            break;
          case '5':


            checkDate(this);    
            case '6':

      }
   }

   function checkName(elem) {
      let check = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]{1,16}?$/u.test(elem.value);
      getResult(check, elem);  
   }



   function checkSurname(elem) {
      let check = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]{1,16}?$/u.test(elem.value); 
      getResult(check, elem);
   }

function checkEmail(elem) {
      let check =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,5})$/.test(elem.value);
      // /^[\w.-]+@[a-z]+\.[a-z]{2,3}$/
      getResult(check, elem);       
   }


   function checkPassword(elem) {
      let check = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/g.test(elem.value);
      getResult(check, elem);
   }



   function checkPassworD(elem) {
      let check = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/g.test(elem.value);
      getResult(check, elem);
   }


   function checkDate(elem) {
      let check = /^((0[1-9])|([1-2]\d)|(3[0-1]))\.((0[1-9])|(1[0-2]))\.((19\d{2})|(20[0-1][0-5]))$/.test(elem.value); 
                    
      getResult(check, elem);
   }


   function getResult(check, elem) {
      if (!check) {
         elem.dataset.check = false;    
         getErrorText(elem);           
         getStyleFalseText(elem);      
         return;
      }


      elem.dataset.check = true;
      getStyleTrueText(elem);
   }

   function getStyleFalseText(elem) {
      elem.style.color = 'red';
      elem.style.fontWeight = 'normal';
   }

   function getStyleTrueText(elem) {
      elem.style.color = 'green';
      elem.style.fontWeight = 'bold';
   }

   function getStylePrimary(elem) {
         elem.style.color = '#000';
         elem.style.fontWeight = 'normal';
   }
   
   function sendForm() {                           
      for(var i = 0, max = input.length; i < max; i++) { 
         let check = input[i].dataset.check;
         
         if (check === 'false' || check === undefined) return;
      }
      alert('все ок!')
   }


   function getErrorText(elem) {
      if (timer)return; 
      
      let str = "НЕ ПРАВЕЛЬНЫЙ ВВОД ДАННЫХ", 
         val = elem.value,
         placeholder = elem.placeholder,  
         index = 0;                    


      elem.value = '';                 
      elem.placeholder = '';              
      

      timer = window.setInterval(function() {   

         elem.value = elem.value + str.substr(index, 1);
         index = index + 1;


         if (index == str.length) {
            clearInterval(timer);
            timer = 0;     
         }
      }, 20);


      window.setTimeout(function() {  
            elem.value = val;       
            elem.placeholder = placeholder;
      }, 1000);
   }
   
})();
