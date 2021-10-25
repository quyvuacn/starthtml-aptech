var signup = document.getElementsByClassName('btn_signup')
var login = document.getElementsByClassName('btn_login')
var modal = document.getElementsByClassName('modal')[0]
var auth_form_signup = document.getElementById('auth-form_signup')
var auth_form_login = document.getElementById('auth-form_login')
var btnnormal =  document.getElementsByClassName('btn--normal')
console.log(btnnormal)
for(var l of login ){
 l.addEventListener('click',showlogin)
}
for(var s of signup ){
    s.addEventListener('click',showsignup)
}
for(var btn of btnnormal ){
    btn.addEventListener('click',hide)
   }


modal.addEventListener('click',hide)


auth_form_signup.addEventListener('click',function(e){
     e.stopPropagation() // stop sk nổi vòm
})
auth_form_login.addEventListener('click',function(e){
    e.stopPropagation() // stop sk nổi vòm
})

function showlogin(){
   modal.style.display = 'flex'
   auth_form_signup.style.display = 'none'
   auth_form_login.style.display = 'block'
}
function showsignup(){
    modal.style.display = 'flex'
    auth_form_login.style.display = 'none'
    auth_form_signup.style.display = 'block'

 }

function hide(){
    modal.style.display = 'none';
}

