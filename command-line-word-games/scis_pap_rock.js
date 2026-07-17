const args = process.argv.slice(2);

//I win if key===value
const rules = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

const keys = Object.keys(rules);

const index = Math.floor(Math.random() * keys.length);
const computer_word = keys[index];

if (!args[0]) {
  console.error("You didn't enter anything!");
  return;
}

const player_word = args[0].toLowerCase();
const message = `You chose ${player_word}. Computer chose ${computer_word}.`;

if (keys.includes(player_word)) {
  if (player_word === computer_word) {
    console.log(`${message}.You draw`);
  } else if (rules[player_word] === computer_word) {
    console.log(`${message}.You win`);
  } else {
    console.log(`${message}.You lose`);
  }
} else {
  console.error(`Enter correct word: ${keys.join(", ")}`);
}
