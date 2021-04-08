const fs = require("fs").promises

const pages = async () => {
    // function autoload pages, and export them with the name of the file
    const listPages = await fs.readdir("./pages")
    const objPage = {}

    const ps = listPages.map(async page => {
        objPage[page.replace(".html", "")] = await fs.readFile(`./pages/${page}`, { encoding: "utf-8" })
    })

    await Promise.all(ps)
    return { ...objPage }
}

export default pages