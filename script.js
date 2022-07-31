const txtInput = document.querySelector(".text1");
const msg = document.querySelector(".text2");

// Buttons functions
	function btnEncrypt() {
		const encryptTxt = encrypt(txtInput.value)
		msg.value = encryptTxt
		msg.style.backgroundImage="none"
	}

	function encrypt(encryptedString) {
		let codeMatrix = [["a","#xQ&&!"], ["e","&!@XA"], ["i","A&*FG"], ["o","&SDQ!!"], ["u","!WQWE$"], ["d", "E$@!!$%"], ["g", "$%27x"], ["c", "27y@!"], ["p", "243"] ];
		encryptedString = encryptedString.toLowerCase();

		for(let i=0; i < codeMatrix.length; i++) {
				if(encryptedString.includes(codeMatrix[i][0])) {
					encryptedString = encryptedString.replaceAll(codeMatrix[i][0], codeMatrix[i][1])
				}
		}
		return encryptedString;
	}

	function btnDecrypt() {
		const txtdecrypt = decrypt(msg.value)
		msg.value = txtdecrypt
	}

	function decrypt(decryptedString){
		let decodeMatrix = [["a","#xQ&&!"], ["e","&!@XA"], ["i","A&*FG"], ["o","&SDQ!!"], ["u","!WQWE$"], ["d", "E$@!!$%"], ["g", "$%27x"], ["c", "27y@!"], ["p", "243"] ];

		for(let i=0; i < decodeMatrix.length; i++) {
				if(decryptedString.includes(decodeMatrix[i][1])) {
					decryptedString = decryptedString.replaceAll(decodeMatrix[i][1], decodeMatrix[i][0])
				}
		}
		return decryptedString;
	}