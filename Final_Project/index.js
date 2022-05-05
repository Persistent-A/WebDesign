
var submitButton = document.getElementById("submit_form");
var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});




