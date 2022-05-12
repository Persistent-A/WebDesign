const dummyData = `[
    {
        "name": "Harry Potter",
        "city": "London"
    },
    {
        "name": "Don Quixote",
        "city": "Madrid"
    },
    {
        "name": "Joan of Arc",
        "city": "Paris"
    },
    {
        "name": "Rosa Park",
        "city": "Alabama"
    },
    {
        "name": "John",
        "city": "Paris"
    }
]`
// 1).
const myArr = JSON.parse(dummyData)

let output = document.querySelector('.displayData') //Fetching class name 
let outputNameAsPerCity = document.querySelector('.displayNamesAsPerCity')

let ul = document.createElement('ul'); //Creating an unordered list to display on browser

//Iterating over each object in 'myArr' array
myArr.forEach((ele) => {
    const li = document.createElement('li') //Creating 'li' element  
    li.appendChild(document.createTextNode(JSON.stringify(ele.name))) //
    ul.appendChild(li) //appending the child 'li' in 'ul' 
})
output.appendChild(ul)  //appending 'ul' to the container i.e., div


// 2).
let ul1 = document.createElement('ul');
const obj = myArr.filter(objects => objects.city == 'London'); //It filters the array according to the city equal to London.
obj.forEach((element) => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(JSON.stringify(element.name)))
    ul1.appendChild(li)
})
outputNameAsPerCity.appendChild(ul1)

//3).
let k = 1; //Initializing k
const sameCityUsers = [] //Creating an empty array
//Iterating over each element in 'myArr' array
myArr.forEach((element, index, myArr) => {
    const sameUser = []
    const userWithSameCity = {};
    sameUser.push(element.name); //Storing the names in an empty array.
    //Iterating over the length of the array keeping i = 1 at first and then incrementing it.
    for(let i=k; i<myArr.length; i++) {
        //If city 
        if(element.city === myArr[i].city) {
            sameUser.push(myArr[i].name);
        }
    }
    if(sameUser.length > 1){
        userWithSameCity.city = element.city;
        userWithSameCity.name = sameUser;
        sameCityUsers.push(userWithSameCity)
    }
    k++
})

let ul3 = document.createElement('ul');
const sameCity = document.querySelector('.displayNamesAsPerSameCity')
sameCityUsers.forEach(element => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(JSON.stringify(element)))
    ul3.appendChild(li)
    sameCity.appendChild(ul3)
})





