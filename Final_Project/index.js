// FORM - functionality
    
const submitButton = document.getElementById("submit_form"); // Use of DOM to get submit button input element
const form = document.getElementById("form"); // It stores the whole form elemnet to form variable
    /* on submission of the form, 
        initialization and execution of a function will be carried out*/
form.addEventListener("submit", function (e) {
    /* setTimeout function takes in a callback function and delaytime as an argument in miliseconds
        it executes the function after delaytime*/
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true; // after 1 milisecond the callback function will be executed
    }, 1);
});


// ABOUT US TAB - functionality

const tabcontent = document.querySelectorAll(".tabcontent");
const tablinks = document.querySelectorAll(".tablinks");
// Iterating over tabs and adding addeventlistener function to make every tab click functional.
tablinks.forEach(ele => {
    ele.addEventListener('click', () => {
        tabcontent.forEach(element => element.style.display = "none"); // Content of all tabs will get invisible.
        tablinks.forEach(element => element.className = element.className.replace(" active", "")); // Replaces all active className to 'active'
        document.getElementById(ele.innerHTML).style.display = "block"; // Content of clicked tab will get visible
        ele.className += " active"; // clicked tab will get class name - 'tablink active'
    })
})
document.getElementById("defaultOpen").click(); 

// Services button - functionality

const servicesContent = ['Welcome to our Services section!', 'We are happy to help you.', 'Please navigate here to select options to avail service on.', 'Congratulations you have successfully navigated our Service section.']; //Storing as an array.
const content = document.querySelector('.displayService'); 
const serviceButton = document.querySelectorAll('.service-button');
// Assigning the content to display.
content.innerHTML = servicesContent[0];

// Iterating over navigation button.
serviceButton.forEach(element => element.addEventListener('click', () => {
    /* for each click on navigation button 
        the statements will increase or decrese the currentContentIndex
        and according to new Index it fetches content from stored array 
        and displays it to services section
    */
    let currentContentIndex = servicesContent.indexOf(content.innerHTML); 
    if (element.className === 'service-button next') {
        if (currentContentIndex === (servicesContent.length -1)) {
            return 0
        }
        else {
            // increment in index if click on next - button
            currentContentIndex++;
            content.innerHTML = servicesContent[currentContentIndex];
        }
    }
    else if(element.className === 'service-button prev') {
        if (currentContentIndex === 0) {
            return 0
        }
        else {
             // decrement in index if click on previous - button
            currentContentIndex--;
            content.innerHTML = servicesContent[currentContentIndex];
        }
    }
}));
 

