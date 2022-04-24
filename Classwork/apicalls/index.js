
//two ways of making api calls/ handling promises that is:
//promises.then()
//async await..
//axios / fetch

const url = 'https://restcountries.com/v2//all';

async function getAllCountriesFromApi(){

    const response = await fetch(url);

    const data =  await response.json();
    console.log(data);

    let output = document.querySelector('.displayData')

    let ul = document.createElement('ul');

    data.forEach((country) => {

        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${country.name}`))
        ul.appendChild(li)
    })
    output.appendChild(ul)
    
}
getAllCountriesFromApi();
