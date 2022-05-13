const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncripty() {
    const txtEncriptado = encripty(inputTexto.value)
    mensagem.value = txtEncriptado
    mensagem.style.backgroundImage="none"
}

function encripty(stringEncripted) {
    let matrizCodigo = [["a","fgtx"], ["e","lgkx"], ["i","zasx"], ["o","xczx"], ["u","tadx"], ["d", "tjcx"], ["g", "qwx"], ["c", "szsx"], ["p", "ytx"] ];
    stringEncripted = stringEncripted.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncripted.includes(matrizCodigo[i][0])) {
            stringEncripted = stringEncripted.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncripted;
}

function btnDecripty() {
    const txtDecripty = decripty(mensagem.value)
    mensagem.value = txtDecripty
}

function decripty(stringDecripted){
    let matrizDecode = [["fgtx","a"], ["lgkx","e"], ["zasx","i"], ["xczx","o"], ["tadx","u"], ["tjcx", "d"], ["qwx", "g"], ["szsx", "c"], ["ytx", "p"]];

    for(let i=0; i < matrizDecode.length; i++) {
        if(stringDecripted.includes(matrizDecode[i][0])) {
            stringDecripted = stringDecripted.replaceAll(matrizDecode[i][0], matrizDecode[i][1])
        }
    }
    return stringDecripted;
}