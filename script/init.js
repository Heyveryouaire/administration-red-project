// import des pages
import pages from "./loadPages.js"

// import des id button (menu)
const main = document.getElementById("main")
const home = document.getElementById("home")
const login = document.getElementById("login")

async function init(){
    // destructuring each pages
    const { login_example, accueil } = await pages()

    // change dom content on click
    home.addEventListener("click", async () => {
        main.innerHTML = accueil
    })
    
    login.addEventListener("click", async() => {
        main.innerHTML = login_example
    })

}init()
