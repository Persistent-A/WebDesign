
var submitButton = document.getElementById("submit_form");
var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});

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



