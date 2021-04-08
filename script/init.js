import pages from "./loadPages.js"
import loginComponent from "./components/login.js"
import homeComponent from "./components/home.js"

const main = document.getElementById("main")

async function init(){
    // destructuring each pages
    const { login_example, home } = await pages()
    
    // default page :
    main.innerHTML = home
    // Call component's page
    // send the page as paramse
    homeComponent(home)
    loginComponent(login_example)

}init()