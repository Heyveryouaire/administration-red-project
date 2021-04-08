const fs = require("fs").promises

const pages = async () => {
    // for each pages to add: add following lines :
    const login_example = await fs.readFile("./pages/login.html", { encoding: "utf-8"})
    const accueil = await fs.readFile("./pages/accueil.html", { encoding: "utf-8"})
    
    // and export right here
   return { 
    accueil, 
    login_example
   }
}

export default pages 