const url1 = "https://fakestoreapi.com/products";

async function getdetailsfromApi(){
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

    //.sort() takes a callback function which compares the elements of data array.
    const out = data.sort(function(a, b) {
            const titleA = a.title.toUpperCase(); //It ignores the uppercase and lowercase
            const titleB = b.title.toUpperCase(); 
            if (titleA < titleB) {
              return -1; //It will keep the same order of the title.
            }
            if (titleA > titleB) {
              return 1; //It will the change the order of title.
            }
            return 0; //For this both the titles must be equal.
        });
    console.log(out) //To check over the console.
    
    let outputBySort = document.querySelector('.display_sort');
    let ul1 = document.createElement('ul');
    
    out.forEach((element) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(JSON.stringify(element)))
        ul1.appendChild(li)
    })
    outputBySort.appendChild(ul1) 
}
getdetailsfromApi()