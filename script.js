let data = new Date()

let dia = String(data.getDate()).padStart(2,0)

let mes = String(data.getMonth()).padStart(2,0)

let ano = data.getFullYear()

let dataAtual = `${dia}/${mes}/${ano}`


function welcome(){
    alert("Bem vindo ao Kit On")
    window.open("../index.html")
 }
function trocar(cor){
    document.body.style.background = cor
}
function validateFields(){
    const emailValid = isEmailValid;
    const passwordValid = isPasswordValid;
    document.getElementById("button").disabled = !emailValid || !passwordValid;
 }
 function isEmailValid(){
     const email=document.getElementById("emailForm").value;
     if (!email){
         return false;
     } return validateEmail(email);
 }
 function isPasswordValid(){
     const password = getElementById("passwordForm").value;
     if (!password){
         return false;
     } return true;
 }
 function validateEmail(email) {
     return /\S+@\S+\.\S+/.test(email);
 }

