const init = (addTeam, next) => {
    const addTeamPage = document.getElementById("addTeam")

    const players = [{ id: 1, name: "charles" }, { id: 2, name: "antoine" }]

    const updatePlayers = () => {
        const container = document.createElement("div")
        players.map(player => {
            const name = document.createElement("div")
            name.textContent = player.name
            name.id = player.id
            container.appendChild(name)
        })

        playerList.innerHTML = container.innerHTML
    }



    addTeamPage.addEventListener("click", async () => {
        // once the page is set, we can interact with DOM element
        main.innerHTML = addTeam



        const form = document.getElementById("form")
        const validPlayer = document.getElementById("validPlayer")
        const playerList = document.getElementById("playerList")

        // must have to be updated when change
        updatePlayers()

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const formData = new FormData()
            formData.append("teamName", e.target.teamName.value)
            players.map((player, index) => {
                formData.append(`player[${index}]`, player.name)
            })

            formData.append("jean", "guy")
            
            for(let data of formData.values()){
                console.log('data : ', data)
            }

            // value en envoyer a un fetch ...

        main.innerHTML = next


            // console.log('e : ', e.target.teamName.value)
            // console.log('list joueur : ', players)
        })

        validPlayer.addEventListener("click", (e) => {
            e.preventDefault()
            const playerName = document.getElementById("playerName")

            if (playerName.value.match(/\w{2,50}/ig)) {
                console.log('le nom est valide')
                players.push({ id: players.length + 1, name: playerName.value })
                updatePlayers()

                playerName.value = ""

                // l'enregistrer dans un array pour l'envoyé par la suite
            } else {
                console.log('le nom n\'est pas valide ')
                // afficher un message d'erreur
            }


        })


    })
}

export default init