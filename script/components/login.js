function test_login() {
    console.log("Log ...")
}

const init = (login_example) => {
    const login = document.getElementById("login")

    login.addEventListener("click", async () => {
        // once the page is set, we can interact with DOM element
        test_login()
        main.innerHTML = login_example

        const form = document.getElementById("form")

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log('e : ', e.target.name.value)
        })
    })
}

export default init