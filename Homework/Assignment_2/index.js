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

let output = document.querySelector('.displayData')
let outputNameAsPerCity = document.querySelector('.displayNamesAsPerCity')

let ul = document.createElement('ul');

myArr.forEach((ele) => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(JSON.stringify(ele.name)))
    ul.appendChild(li)
})
output.appendChild(ul)  


// 2).
let ul1 = document.createElement('ul');
const obj = myArr.filter(objects => objects.city == 'London');
obj.forEach((element) => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(JSON.stringify(element.name)))
    ul1.appendChild(li)
})
outputNameAsPerCity.appendChild(ul1)

// 3).
let k = 1;
const sameCityUsers = []
myArr.forEach((element, index, myArr) => {
    const sameUser = []
    const userWithSameCity = {};
    sameUser.push(element.name);
    for(let i=k; i<myArr.length; i++) {
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



