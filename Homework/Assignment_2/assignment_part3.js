const url1 = "https://fakestoreapi.com/products";

async function getUsersWithIdfromApi(){
    const response = await fetch(url1);
    const data = await response.json();
    console.log(data)

    let output = document.querySelector('.display');
    let ul = document.createElement('ul');

    const obj = data.filter(objects => objects.price > 100);
    obj.forEach((element) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`"${element.title}" : "${element.price}"`))
        ul.appendChild(li)
    })
    output.appendChild(ul) 

    const out = data.sort(function(a, b) {
            const titleA = a.title.toUpperCase(); 
            const titleB = b.title.toUpperCase(); 
            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            return 0;
        });
    console.log(out)
    
    let outputBySort = document.querySelector('.display_sort');
    let ul1 = document.createElement('ul');
    
    out.forEach((element) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(JSON.stringify(element)))
        ul1.appendChild(li)
    })
    outputBySort.appendChild(ul1) 
}
getUsersWithIdfromApi()