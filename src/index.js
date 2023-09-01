import pokemonTpl from './pokemon-cards.handlebars'

const cardContainer = document.querySelector('.js-card-container')

form.addEventListener('submit', (event)=>{
event.preventDefault()
const id = event.currentTarget.query.value

fetch(`https://pokeapi.co/api/v2/pokemon/15`).then(res => res.json())
.then((pokemon)=>{
    const markup = pokemonTpl(pokemon)
    console.log(markup)

    cardContainer.innerHTML = markup
})
})









