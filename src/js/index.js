/* Here goes your JS code */

let popupWrapper = document.getElementsByClassName('popup')[0],
    popupBtn = document.getElementsByClassName('btn-main')[0],
    closePopup=document.getElementsByClassName('close-popup')[0],
    successInfo=document.getElementById('successInfo');


popupBtn.addEventListener('click', function () {
    if (popupWrapper.style.display === '') {
        popupWrapper.style.display = 'block';
    }
});

closePopup.addEventListener('click', function () {
    if (popupWrapper.style.display === 'block') {
        popupWrapper.style.display = '';
    }
});




const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    let mail=document.loginForm.mail.value,
        password=document.loginForm.password.value,
        agree=document.loginForm.agree;


    if ( mail==="" || mail==null) {
        console.log("wrong e-mail");
        alert("valid e-mail");
        document.loginForm.mail.focus();
        return false;
    }

   if ( password==="" || password==null) {
       console.log("wrong password");
       alert("valid password");
       document.loginForm.password.focus();
       return false;
    }
    if ( agree.checked === false) {
        console.log("wrong checkbox");
        alert("valid checkbox");
        return false;
    }

    if (popupWrapper.style.display === 'block') {
            popupWrapper.style.display = '';
            popupBtn.style.display = 'none';
            agree.checked=false;
    }

     setTimeout(function(){
         successInfo.style.display='block';
         }, 3000);


});
