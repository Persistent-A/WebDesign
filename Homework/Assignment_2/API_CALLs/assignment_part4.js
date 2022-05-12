const url2 = "https://api.thecatapi.com/v1/breeds";

async function getcatdetailsfromApi(){
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data)

    let output = document.querySelector('.displayNames');
    let ul = document.createElement('ul');

    const out = data.sort(function(a, b) {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    });

    console.log(out.reverse()) //reverse the 'out' array.
    
    out.forEach((element) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(JSON.stringify(element.name)))
        ul.appendChild(li)
    })
    output.appendChild(ul)
    
    let outputNameByState = document.querySelector('.displayCatNamesAsPerUs');
    let ul1 = document.createElement('ul');

    const obj = data.filter(objects => objects.country_codes === "US"); //using filter method to filter the elements with country_codes = 'US'.

    obj.forEach((element) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(JSON.stringify(element.name)))
        ul1.appendChild(li)
    })
    outputNameByState.appendChild(ul1)
}
getcatdetailsfromApi()