//precondition
const args = process.argv.slice(2);

//Step 1. .split(' ')=> massiv of strings
const satz = "Awesome JavaScript code is hard to write but interesting";
const satz_massiv = satz.toLowerCase().split(" ");
args[0] = satz;

//Step 2. übersetzen function
const übersetzerPigLatin = function (word) {
  const vowels = "aeiouAEIOUY";

  if (vowels.includes(word[0])) {
    return word + "way";
  } else if (!vowels.includes(word[0]) && vowels.includes(word[1])) {
    return word.slice(1) + word.slice(0, 1) + "ay";
  } else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
    return word.slice(2) + word.slice(0, 2) + "ay";
  }
};

latin_satz_massiv = satz_massiv.map(übersetzerPigLatin); //ohne () für function
const latin_satz = latin_satz_massiv.join(" ");
const final_satz = latin_satz[0].toUpperCase() + latin_satz.slice(1);

console.log(satz);
console.log(final_satz);
