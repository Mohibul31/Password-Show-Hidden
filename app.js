let eye = document.getElementById("eye");
let pass = document.getElementById("password");

eye.onclick = function(){
    if (pass.type == "password") {
        pass.type = "text"
        eye.src = "eyeOpen.png"
        eye.alt = "open"
    } else {
        pass.type = "password"
        eye.src = "eyeClose.png"
        eye.alt = "Close"
    }
}