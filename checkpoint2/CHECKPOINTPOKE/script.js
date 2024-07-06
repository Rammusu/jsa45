const pokemonList = [
    "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
    "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
    "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata",
    "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu",
    // ... Thêm các tên Pokémon khác tại đây
];

const selectElement = document.getElementById('pokemon-select');

// Điền các tùy chọn Pokémon vào thẻ <select>
pokemonList.forEach(pokemon => {
    const option = document.createElement('option');
    option.value = pokemon;
    option.textContent = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
    selectElement.appendChild(option);
});

async function searchPokemon() {
    const pokemonName = selectElement.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url);
    if (response.ok) {
        const pokemon = await response.json();
        document.getElementById('name').innerText = pokemon.name;
        document.getElementById('type').innerText = pokemon.types.map(type => type.type.name).join(', ');
        document.getElementById('height').innerText = pokemon.height;
        document.getElementById('weight').innerText = pokemon.weight;
        document.getElementById('bio').innerText = pokemon.base_experience;
    } else {
        alert('Pokemon not found');
    }
}