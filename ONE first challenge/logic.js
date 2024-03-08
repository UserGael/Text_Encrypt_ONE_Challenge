document.getElementById("bttencrypt").addEventListener("click", () => {main(true)});
document.getElementById("bttdesencrypt").addEventListener("click", () => {main(false)});
document.getElementById("bttcopy").addEventListener("click", () => {copy()});
const invalid = "No puedes utilizar mayusculas ni caracteres especiales.";
const copied = "Texto copiado correctamente.";
function main(val) {
  if (checkin(document.getElementById("text").value) == false) {
    document.getElementById("result").textContent = invalid;
  } else if (val == true) {
    encryption(document.getElementById("text").value);
  } else if (val == false) {
    desencryption(document.getElementById("text").value);
  }
}
function checkin (str) { // Funcion para verificar el texto
  let checktext = Array.from(str); // Pasamos texto a array para manejarlo
  for (let index = 0; index < checktext.length; index++) { 
    if (checktext[index].charCodeAt() > 96 && checktext[index].charCodeAt() < 123) {} // Verificamos que solo sean 'a-z'
    else if (checktext[index].charCodeAt() == 164 || checktext[index].charCodeAt() == 32) {} // Descartamos la 'ñ'
    else { return false;}
  }
  return true;
}
function encryption (str) { //Creamos funcion para encriptar
  let text = Array.from(str); //Pasamos texto a Array para manejarlo
  for (let index = 0; index < text.length; index++) { //Encriptamos letra por letra
    if (text[index] == 'e') { text[index] = 'enter'}
    else if (text[index] == 'i') { text[index] = 'imes'}
    else if (text[index] == 'a') { text[index] = 'ai'}
    else if (text[index] == 'o') { text[index] = 'ober'}
    else if (text[index] == 'u') { text[index] = 'ufat'} }
  document.getElementById("result").textContent = text.join('');
}
function desencryption (str) { //Creamos funcion para desencriptar
  let text = str;
  text = text.replace(/enter/g, 'e');
  text = text.replace(/imes/g, 'i');
  text = text.replace(/ober/g, 'o');
  text = text.replace(/ai/g, 'a');
  text = text.replace(/ufat/g, 'u');
  document.getElementById("result").textContent = text;
}
function copy() {
  const str = document.getElementById("result");
  str.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  document.getElementById("message").textContent = copied;
}