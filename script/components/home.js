const init = (main, { pages, scripts }) => {
    const newGame = document.getElementById("newGame");

    newGame.addEventListener("click", async () => {
        main.innerHTML = pages.newGame;
        scripts.newGameComponent(main, { pages, scripts });
    })
}
export default init