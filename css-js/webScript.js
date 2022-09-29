var expanded = true;
txtAppear()
function txtDisappear(){
    document.getElementById("home-link").width = "0em"
    document.getElementById("home-link").style.opacity = "0%"
    document.getElementById("home-link").textContent = ""
    document.getElementById("project").width = "0em"
    document.getElementById("project").style.opacity = "0%"
    document.getElementById("project").textContent = ""
    document.getElementById("cv").width = "0em"
    document.getElementById("cv").style.opacity = "0%"
    document.getElementById("cv").textContent = ""
    document.getElementById("contact").width = "0em"
    document.getElementById("contact").style.opacity = "0%"
    document.getElementById("contact").textContent = ""
    document.getElementById("sidebar").style.width = "0em"
    document.getElementById("sidebar") = "rgba(96,96,96,0.5)"
}
function txtAppear(){
    document.getElementById("sidebar").style.width = "12em"
    document.getElementById("sidebar").style.backgroundColor = "rgba(96,96,96,1)"
    document.getElementById("home-link").width = "12em"
    document.getElementById("home-link").style.opacity = "100%"
    document.getElementById("home-link").textContent = "Home"
    document.getElementById("project").width = "12em"
    document.getElementById("project").style.opacity = "100%"
    document.getElementById("project").textContent = "Projects"
    document.getElementById("contact").width = "12em"
    document.getElementById("contact").style.opacity = "100%"
    document.getElementById("contact").textContent = "Contact Information"
    document.getElementById("cv").width = "12em"
    document.getElementById("cv").style.opacity = "100%"
    document.getElementById("cv").textContent = "CV"
}
function sideEnlarge(){
    if (expanded){
        expanded = false;
        txtDisappear()
    }else{
        expanded = true;
        txtAppear()
    }
}