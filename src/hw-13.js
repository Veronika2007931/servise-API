
import debounce from "lodash.debounce"
import {fetchCountries} from "./fetchCountries"

console.log(fetchCountries('Ukraine'))

const input = document.querySelector(".input")
input.addEventListener("input", debounce(onSearchQuery, 2000))

function onSearchQuery(event){

    fetchCountries(event.target.value)
    .then((result)=>console.log(result))
}



