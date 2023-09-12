
import debounce from "lodash.debounce"
import {fetchCountries} from "./fetchCountries"
import {error} from '@pnotify/core'; 
import '@pnotify/core/dist/BrightTheme.css';

 


const box = document.querySelector(".js-box")
const list = document.querySelector(".list")

const input = document.querySelector(".input")
input.addEventListener("input", debounce(onSearchQuery, 2000))

function onSearchQuery(event){

    fetchCountries(event.target.value)
    
    .then((cantries)=>{
        console.log(cantries)
        if(cantries.length === 1){
          const markap = `
          <h1></h1>
          <p>Capital: ${cantries.capital} </p>
          <p>Population: ${cantries.population} </p>
          <p>Lenguages: ${cantries.languages}</p>
          <ul>
              <li></li>
              <li></li>
              <li></li>
          </ul>
          <img src="" alt="" >
          `

          box.innerHTML = markap
        }else if(cantries.length >= 2 && cantries.length <= 10){
           const listCantries = cantries.map((cantrie)=>{
               return ` <li>${cantrie.name.common}</li>`
              
           }).join(" ")
              list.innerHTML = listCantries
        }else{
           error({
                title: 'Oh No!',
                text: 'Something terrible happened.'
              });
        }
    })
}

