import pages from "./loadPages.js"
import loginComponent from "./components/connexion.js"
import homeComponent from "./components/home.js"
import newGameComponent from "./components/newGame.js"
import addTeamComponent from "./components/addTeam.js"

const { ipcRenderer } = require('electron')

const main = document.getElementById("main")

async function init() {
    // destructuring each pages
    const { login_example, home, addTeam, connexion, newGame } = await pages()
    console.log("ipceree", ipcRenderer)
    
    // default page :
    main.innerHTML = home
    // Call component's page
    // send the page as paramse
    homeComponent(home)
    addTeamComponent(addTeam)
    loginComponent(connexion)
    newGameComponent(newGame)

} init()