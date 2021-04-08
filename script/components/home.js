const init = (home) => {
    const h = document.getElementById("home")

    h.addEventListener("click", async () => {
        main.innerHTML = home
    })
}
export default init