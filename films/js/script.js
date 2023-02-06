const elForm = document.querySelector('.form');
const elInputSearch = selectElem('.input__search', elForm);
const elSelect = selectElem('.selecting', elForm);
const elFilter = selectElem('#films__filter', elForm);
const elList = document.querySelector('.films__wrapper');
const elTemplate = document.querySelector('#template').content

function renderMovies(filmsArray, element){
    element.innerHTML = null;
    
    filmsArray.forEach((film) =>{
        const cloneTemplate = elTemplate.cloneNode(true);
        
        selectElem('.cards__img', cloneTemplate).src = film.poster
        selectElem('.cards__title', cloneTemplate).textContent = film.title
        selectElem('.cards__date', cloneTemplate).textContent =  getUserTime(film.release_date)
        selectElem('.cards__date', cloneTemplate).datetime =  getUserTime(film.release_date)
        
        element.append(cloneTemplate);
    })
}

renderMovies(films, elList);

function renderGenres(array, element){
    
    let result = [];
    
    array.forEach((film) => {
        film.genres.forEach(genre =>{
            if(!result.includes(genre)){
                result.push(genre)
            }
        })
    })
    
    result.forEach(genre =>{
        let newOption = createDOM('option');
        newOption.textContent = genre;
        newOption.value = genre;
        
        element.appendChild(newOption)
    })
}

renderGenres(films, elSelect)

elForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const inputValue = elInputSearch.value.trim();
    const selectValue = elSelect.value.trim();
    const filterValue = elFilter.value.trim();
    
    const regex = new RegExp(inputValue, 'gi');
    
    const filteredFilms = films.filter((film) => film.title.match(regex));
    
    let foundFilms = [];
    
    if(selectValue === 'All'){
        foundFilms = filteredFilms
    }else{
        foundFilms = filteredFilms.filter(film => film.genres.includes(selectValue))
    }

    elInputSearch.value = null;

    renderMovies(foundFilms, elList);
});


let num = [ 5, 7, 9, 10]

const result = []

for(let i = num.length; i >= 0; i--){
     result.push(num[i])
}

console.log(result)

console.log(num.reverse());

