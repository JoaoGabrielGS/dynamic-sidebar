const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')

openMenu.onclick = function(){
    document.getElementById("teste").style.display = "none"

    document.getElementById("teste1").style.display = "flex"
    setTimeout(() => {
        document.getElementById("teste1").style.visibility = "visible"
        document.getElementById("teste1").style.opacity = 1
    }, 100);
}

closeMenu.onclick = function(){
    document.getElementById("teste").style.display = "flex"
    document.getElementById("teste1").style.display = "none"
}







