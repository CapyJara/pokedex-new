const test = QUnit.test;

QUnit.module('template creation');

function makeHtmlTemplate(pokemon) {
    const html = `
    <a href="${pokemon.pokedex}" class="pokemon-container">
        <div class="${pokemon.type_1} pokemon-div">
            <div class="${pokemon.type_2} type-two"></div>
            <h3 id="pokemon">${pokemon.pokemon}</h3>
            <img src="${pokemon.url_image}">
            <div class="stats">
                <p>A: ${pokemon.attack}</p>
                <p>D: ${pokemon.defense}</p>
                <p>HP: ${pokemon.hp}</p>
            </div>
        </div>
    </a>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('if the template matches desired html', assert => {
    // arrange
    const pokemon = {
        'pokemon': 'bulbasaur',
        'id': 1,
        'species_id': 1,
        'height': 7,
        'weight': 69,
        'base_experience': 64,
        'type_1': 'grass',
        'type_2': 'poison',
        'attack': 49,
        'defense': 49,
        'hp': 45,
        'special_attack': 65,
        'special_defense': 65,
        'speed': 45,
        'ability_1': 'overgrow',
        'ability_2': 'NA',
        'ability_hidden': 'chlorophyll',
        'color_1': '#78C850',
        'color_2': '#A040A0',
        'color_f': '#81A763',
        'egg_group_1': 'monster',
        'egg_group_2': 'plant',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id': 1,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 1,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'bulbasaur',
        'pokedex': 'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    // act
    const result = makeHtmlTemplate(pokemon);
    // assert
    assert.htmlEqual(result, `
        <a href="http://www.pokemon.com/us/pokedex/bulbasaur" class="pokemon-container">
            <div class="grass pokemon-div">
                <div class="poison type-two"></div>
                <h3 id="pokemon">bulbasaur</h3>
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
                <div class="stats">
                    <p>A: 49</p>
                    <p>D: 49</p>
                    <p>HP: 45</p>
                </div>
            </div>
        </a>
    `);
});