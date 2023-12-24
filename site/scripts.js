function copyEmail() {
    var emailText = document.getElementById("email").innerText;
    navigator.clipboard.writeText(emailText).then(function() {
        console.log("Copied the text: " + emailText);
        var alertBox = document.getElementById("copy-alert");
        alertBox.style.display = "inline";
        setTimeout(function() {
            alertBox.style.display = "none";
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}