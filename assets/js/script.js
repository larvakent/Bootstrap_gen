/*
Case Sensitive = reconhece letras maiusculas
por Tag: getElmentByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/


let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let emailOk = false
let assuntoOk = false

email.style.width = "100%"
assunto.style.width = "100%"


function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }
    else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caractéres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }
    else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    }
    else {
        alert ("Preencha corretamente o formulário antes de enviar...")
    }
}

