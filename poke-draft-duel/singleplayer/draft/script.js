// pick two random Pokémon from the dataset
const p1 = POKEMON[Math.floor(Math.random() * POKEMON.length)];
const p2 = POKEMON[Math.floor(Math.random() * POKEMON.length)];

function renderCard(pokemon) {
  return `
    <div class="card">
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprite}" width="120">
      <p>HP: ${pokemon.stats.hp}</p>
      <p>ATK: ${pokemon.stats.atk}</p>
      <p>DEF: ${pokemon.stats.def}</p>
      <button onclick="choose('${pokemon.name}')">Choose</button>
    </div>
  `;
}

document.getElementById("choices").innerHTML =
  renderCard(p1) + renderCard(p2);

function choose(name) {
  localStorage.setItem("playerPick", name);
  window.location.href = "../battle/index.html";
}
