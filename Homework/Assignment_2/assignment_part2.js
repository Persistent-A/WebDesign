
const url = "https://jsonplaceholder.typicode.com/posts";

async function getUsersWithIdfromApi(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    let output = document.querySelector('.displaytitle');
    let ul = document.createElement('ul');

    const obj = data.filter(objects => objects.userId === 1);

    obj.forEach((element) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`"title": "${element.title}"`))
        ul.appendChild(li)
    })
    output.appendChild(ul) 
}
getUsersWithIdfromApi()