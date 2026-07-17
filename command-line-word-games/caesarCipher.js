//precondition
//const satz = process.argv[2];
//const shiftInput = process.argv[3];

const satz = "";
const shiftInput = '';

const shift = parseInt(shiftInput, 10); // Сюда поставили shiftInput
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let encryptedsatz = "";

//-----------------1------------------//

if (!satz || !shift|| isNaN(shift)) {
  console.log("Fehler: Bitte geben Sie die Satz und die Verschiebung");
  console.log('Beispiel:"hello world" 3');
}


const lowerCasesatz = satz.toLowerCase();
//-----------------2------------------//

for (let i = 0; i < lowerCasesatz.length; i++) {
  const currentLetter = lowerCasesatz[i];
  const currentIndex = alphabet.indexOf(currentLetter);

  if (currentIndex === -1) {
    encryptedsatz += currentLetter;
  } else {
    let newIndex = (currentIndex + (shift % 26) + 26) % 26;
    encryptedsatz += alphabet[newIndex];
  }
}
//-----------------3------------------//

console.log(encryptedsatz);
