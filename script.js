const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncrypt() {
    const txtEncriptado = encrypt(inputTexto.value)
    mensagem.value = txtEncriptado
    mensagem.style.backgroundImage="none"
}

function encrypt(stringEncrypted) {
    let matrizCodigo = [["a","#xQ&&!"], ["e","&!@XA"], ["i","A&*FG"], ["o","&SDQ!!"], ["u","!WQWE$"], ["d", "E$@!!$%"], ["g", "$%27x"], ["c", "27y@!"], ["p", "243"] ];
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
    let matrizDecode = [["a","#xQ&&!"], ["e","&!@XA"], ["i","A&*FG"], ["o","&SDQ!!"], ["u","!WQWE$"], ["d", "E$@!!$%"], ["g", "$%27x"], ["c", "27y@!"], ["p", "243"] ];

    for(let i=0; i < matrizDecode.length; i++) {
        if(stringDecrypted.includes(matrizDecode[i][1])) {
            stringDecrypted = stringDecrypted.replaceAll(matrizDecode[i][1], matrizDecode[i][0])
        }
    }
    return stringDecrypted;
}