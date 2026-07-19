//precondition
//const satz = process.argv[2];
//const shiftInput = process.argv[3];

const satz = "hello world";
const input = -33;

const shift = Number(input);
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let caesarSatz = "";//Um etwas zu füllen, benötigen wir eine leere Container

//-----------------1------------------// Ich führe eine Überprüfung durch

if (!satz || !shift|| isNaN(shift)) {
  console.log("Fehler: Bitte geben Sie die Satz und die Verschiebung");
  console.log('Beispiel:"hello world" 3');
}


const lowerCaseSatz = satz.toLowerCase();
//-----------------2------------------//

for (let i = 0; i < lowerCaseSatz.length; i++) {
  
  const currentLetter = lowerCaseSatz[i];

  const currentIndex = alphabet.indexOf(currentLetter);

  if (currentIndex === -1) {
    caesarSatz += currentLetter;
  } else {
    let newIndex = (currentIndex + (shift % 26) + 26) % 26; //operationen
    caesarSatz += alphabet[newIndex];
  }
}
//-----------------3------------------//

console.log(caesarSatz);

//---------------Fazit-----------------//

// Diese Aufgaben fördern abstraktes Denken:
// *Wir können eine Linie in einen Ring umwandeln.
// *Abwägung von Vor- und Nachteilen, um zu verhindern, 
// dass ein Programm seine Grenzen überschreitet.


// Beispiele:
// Circular Buffer- Dieser Speicher wird kreisförmig beschrieben: 
// Sobald er das Ende erreicht, werden neue Daten ganz an den Anfang 
// geschrieben und überschreiben die alten. Dadurch können Programme 
// unbegrenzt laufen, ohne den Arbeitsspeicher (RAM) des Computers zu überlasten.

// Kryptografie

// Waffenwechsel: Der Spieler drückt die Q-Taste, um zwischen den Waffen 
// zu wechseln (Maschinengewehr, Pistole, Messer, wieder Maschinengewehr). 
// Die Logik von „nächstes/vorheriges“ ist ein grundlegender Algorithmus für Spiele.

// Kartenbewegung: Denken Sie an klassische Spiele wie Pac-Man oder Snake.

// Fotogalerie oder Banner-Karussell

// Widgets zur Zeitauswahl