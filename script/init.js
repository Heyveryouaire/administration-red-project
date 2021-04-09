import pages from "./loadPages.js"
import loginComponent from "./components/connexion.js"
import homeComponent from "./components/home.js"

const main = document.getElementById("main")

async function init() {
    // destructuring each pages
    const { connexion, home } = await pages()

    // default page :
    main.innerHTML = home
    // Call component's page
    // send the page as paramse
    homeComponent(home)
    loginComponent(connexion)

} init()