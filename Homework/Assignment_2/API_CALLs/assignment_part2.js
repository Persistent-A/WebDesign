
const url = "https://jsonplaceholder.typicode.com/posts";
//Making the api calls inside the function and waiting for the response.
async function getUsersWithIdfromApi(){
    //Making api call using await.
    const response = await fetch(url);
    //Converts to json data.
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
//Calling the function.
getUsersWithIdfromApi()