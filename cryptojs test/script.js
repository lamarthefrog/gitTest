const myStrFinal = document.getElementById("myString");
const encryptedFinal = document.getElementById("encrypted");
const decryptedFinal = document.getElementById("decrypted");
const stringAfterDecryption = document.getElementById("stringAfterDecryption");

var myString = "haha pepperoni pizza";
var password = "12345";

var encrypted = CryptoJS.AES.encrypt(myString, password);
var decrypted = CryptoJS.AES.decrypt(encrypted, password);

myStrFinal.innerHTML = myString;
encryptedFinal.innerHTML = encrypted;
decryptedFinal.innerHTML = decrypted;
stringAfterDecryption.innerHTML = decrypted.toString(CryptoJS.enc.Utf8);