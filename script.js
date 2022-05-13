const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncrypt() {
    const txtEncriptado = encrypt(inputTexto.value)
    mensagem.value = txtEncriptado
    mensagem.style.backgroundImage="none"
}

function encrypt(stringEncrypted) {
    let matrizCodigo = [["a","fgtx"], ["e","lgkx"], ["i","zasx"], ["o","xczx"], ["u","tadx"], ["d", "tjcx"], ["g", "qwx"], ["c", "szsx"], ["p", "ytx"] ];
    stringEncrypted = stringEncrypted.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncrypted.includes(matrizCodigo[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncrypted;
}

function btnDecrypt() {
    const txtdecrypt = decrypt(mensagem.value)
    mensagem.value = txtdecrypt
}

function decrypt(stringDecrypted){
    let matrizDecode = [["fgtx","a"], ["lgkx","e"], ["zasx","i"], ["xczx","o"], ["tadx","u"], ["tjcx", "d"], ["qwx", "g"], ["szsx", "c"], ["ytx", "p"]];

    for(let i=0; i < matrizDecode.length; i++) {
        if(stringDecrypted.includes(matrizDecode[i][0])) {
            stringDecrypted = stringDecrypted.replaceAll(matrizDecode[i][0], matrizDecode[i][1])
        }
    }
    return stringDecrypted;
}