export function makeHtmlTemplate(pokemon) {

    const colorTwo = pokemon.color_2 === 'NA' ? '' : pokemon.color_2;
    
    const html = /*html*/ `
    <a href="${pokemon.pokedex}" class="pokemon-container">
        <div class="${pokemon.type_1} pokemon-div" style="background-color: ${pokemon.color_1};">
            <div class="${pokemon.type_2} type-two" style="background-color: ${colorTwo};"></div>
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

const pokedexContainer = document.getElementById('pokedex-container');

export default function loadPokemon(pokedex) {
    while(pokedexContainer.children.length > 0) {
        pokedexContainer.lastElementChild.remove();
    }
    pokedex.forEach(pokemon => {
        const dom = makeHtmlTemplate(pokemon);
        pokedexContainer.appendChild(dom);
    });
}