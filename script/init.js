import pages from "./loadPages.js"
import loginComponent from "./components/connexion.js"
import homeComponent from "./components/home.js"
import newGameComponent from "./components/newGame.js"
import addTeamComponent from "./components/addTeam.js"

const { ipcRenderer } = require('electron')

const main = document.getElementById("main")


async function init() {
    // destructuring each pages
    const {
        home,
        addTeam,
        connexion,
        newGame
    } = await pages()


    // default page :
    main.innerHTML = connexion
    loginComponent(main, {
        pages: {
            home: home,
            addTeam,
            newGame,
            connexion
        },
        scripts: {
            homeComponent: homeComponent,
            loginComponent: loginComponent,
            newGameComponent: newGameComponent,
            addTeamComponent: addTeamComponent,
        }
    })





} init()