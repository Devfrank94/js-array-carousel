//dichiaro array immagini

const imagesArray = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
]


const itemsWrapper = document.querySelector('.items-wrapper');

// dichiaro costanti tasti e contatore immagini
const btnPrev = document.querySelector('.top');
const btnNext = document.querySelector('.down');

let counterImage = 0;

for(let i = 0; i < imagesArray.length; i++){

  //salvo l'elemento del ciclo in una costante
  const image = imagesArray[i];

  itemsWrapper.innerHTML += `
  <img class="item hide" src="${image}">
  `
}

//prendo tutti gli items
// creo HTML collection che è un array contenente tutti i nodi con una determinata classe

const items = document.getElementsByClassName('item');
items[counterImage].classList.remove('hide');

// Creo evento pulsante Next (down arrow)
btnNext.addEventListener('click', function(){

items[counterImage].classList.add('hide');

counterImage++;
items[counterImage].classList.remove('hide');

});

// Creo evento pulsante Prev (Up arrow)
btnPrev.addEventListener('click', function(){

items[counterImage].classList.add('hide');

counterImage--;
items[counterImage].classList.remove('hide');

});

