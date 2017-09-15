function sendEmail() {
    var targetEmail = "blacklhorns@gmail.com";
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = encodeURIComponent(document.getElementById("subject").value);
    var message = document.getElementById("message").value;
    var body = encodeURIComponent(message + "\n\nRegards, \n" + name + "\nEmail: " + email);
    window.open("mailto:" + targetEmail + "?subject=" + subject + "&body=" + body);
    return false;
}