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

document.addEventListener('DOMContentLoaded', function() {
    var text = "Aidan Butler";
    var typingText = document.getElementById('typing-text');
    var i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust speed of typing here
        }
    }

    typeWriter();
});
