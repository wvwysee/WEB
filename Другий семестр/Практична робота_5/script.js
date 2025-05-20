document.getElementById("loadPokemon").addEventListener("click", async () => {
    const pokemonNameOrId = prompt("Введіть ID покемону:");


    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Покемона не знайдено`);
        }

        const data = await response.json();

        const hp = data.stats.find(stat => stat.stat.name === "hp").base_stat;
        const attack = data.stats.find(stat => stat.stat.name === "attack").base_stat;
        const defense = data.stats.find(stat => stat.stat.name === "defense").base_stat;
        const speed = data.stats.find(stat => stat.stat.name === "speed").base_stat;
        const move = data.moves[0].move.name;

        const output = document.getElementById("pokemonOutput");
        output.innerHTML = `
            <div class="pokemon-card">
                <h2>${data.name.toUpperCase()} (#${data.id})</h2>
                <div class="pokemon-hp">❤️ ${hp} HP</div>
                <div class="pokemon-image">
                    <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
                </div>
                <div class="pokemon-types">
                    ${data.types.map(t => `<span class="pokemon-type">${t.type.name}</span>`).join(" ")}
                </div>
                <div class="pokemon-stats">
                    <div class="pokemon-attack">⚔️ ${attack} ATK</div>
                    <div class="pokemon-defense">🛡️ ${defense} DEF</div>
                    <div class="pokemon-speed">⚡ ${speed} SPD</div>
                    <div class="pokemon-speed"> ${move} SPD</div>
                </div>
            </div>
        `;
    } catch (error) {
        document.getElementById("pokemonOutput").innerHTML = `<p style="color: red;">Шото пішло не так,я не знаю що,але можливо: ${error}</p>`;
    }
});