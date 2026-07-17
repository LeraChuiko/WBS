const divContaner = document.querySelector("#pokemon-container");
divContaner.className = "container";

async function fetchPokemon() {
  for (let i = 1; i <= 150; i++) {
    // fetch + cart creation

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      if (!res.ok) throw new Error("Etwas ist shif gelaufen");
      const pokemon = await res.json(); //ein pokemon

      const img = document.createElement("img");
      img.src = pokemon.sprites.front_default;
      img.classList.add("mx-auto", "w-24", "h-24");

      const name = document.createElement("span");
      name.textContent = pokemon.types[0].type.name;
      name.classList.add(
        "block",
        "text-sm",
        "text-gray-500",
        "capitalize",
        "text-center",
        "bg-gray-200",
        "rounded-full",
        "px-2",
        "py-1",
        "mt-1",
      );

      const p = document.createElement("p");
      p.textContent = pokemon.name;
      p.classList.add(
        "text-xl",
        "font-bold",
        "capitalize",
        "text-center",
        "mt-2",
      );

      const cart = document.createElement("div");
      cart.append(img, name, p);
      cart.className = 'bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center transition-all hover:shadow-lg';

      divContaner.append(cart);
    } catch (e) {
      console.error(e);
    }
  }
}

fetchPokemon();

//fetch data ${i}
//create div with this data (img data.sprites.front_default,span data.types[0].type.name, data.name ,p) for jeder 1-150 pokemon
//cart.append(img,span,p)
//divContaner.appendChild(cart)

//call function
