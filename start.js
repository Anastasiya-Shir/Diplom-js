let form=document.querySelector(".form");
let email=form.querySelector('.email');
let pass=form.querySelector('.password');
let div=document.querySelector(".btn");
let btn_send=document.querySelector(".btn_send");
let btnNewUser=document.querySelector(".btn_new_user");
let formNewUser=document.querySelector(".form_new_user");
let newUserEmail=formNewUser.querySelector('.email');
let btnAddUser=document.querySelector(".btn_add_user");
let newPassword=formNewUser.querySelector(".password");
let checkPassword=formNewUser.querySelector(".check_password");
let users=[];
let passwords=[];
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function valid(){if(reg.test(email.value) == false) {
    alert('Введите корректный e-mail');
    
}};
if (email.value.length =0) {
    btn_send.removeAttribute('disabled')
  };

btnNewUser.onclick=function(){
    
   
    formNewUser.style.display="block";
form.style.display="none";
  

};
btn_send.onclick=function(){
valid();
if(
users.find(email.value)=undefined){
alert('такого пользователя нет');
}
else{
    let ind=users.indexOf(email.value);
    console.log(ind);
}
};


btnAddUser.onclick=function(){
    
    let user = newUserEmail.value;
    for(let i=0;i<=users.length; i++ ){
        if (users[i]===user){
            alert('Такой пользователь уже существует')
            formNewUser.style.display="none";
            form.style.display="block";
         
        }
    }
  if(newPassword.value!=checkPassword.value){
       alert('Неверный пароль');
//    users.push(user);
  
   }
  
  if(newPassword.value=checkPassword.value){ let user = newUserEmail.value;

    valid();
    users.push(user); 
    passwords.push(newPassword.value);
   }
};
