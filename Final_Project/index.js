// Form functionality

var submitButton = document.getElementById("submit_form");
var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});

// about us tab functionality

function openAbout(evt, aboutName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0;i< tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
document.getElementById(aboutName).style.display = "block";
evt.currentTarget.className += "active";
}

// services button functionality

const servicesContent = ['Welcome to our Services section!', 'We are happy to help you.', 'Please navigate here to select options to avail service on.', 'Congratulations you have successfully navigated our Service section.'];
const content = document.querySelector('.displayService');
const serviceButton = document.querySelectorAll('.service-button');
content.innerHTML = servicesContent[0];

serviceButton.forEach(element => element.addEventListener('click', () => {
    let currentContentIndex = servicesContent.indexOf(content.innerHTML);
    if (element.className === 'service-button next') {
        if (currentContentIndex === (servicesContent.length -1)) {
            return 0
        }
        else {
            currentContentIndex++;
            content.innerHTML = servicesContent[currentContentIndex];
        }
    }
    else if(element.className == 'service-button prev') {
        if (currentContentIndex === 0) {
            return 0
        }
        else {
            currentContentIndex--;
            content.innerHTML = servicesContent[currentContentIndex];
        }
    }
}));
    





