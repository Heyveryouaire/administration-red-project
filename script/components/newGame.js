const newGame = (newGame, addTeam) => {
    console.log("component newGame")
    const h = document.getElementById("newGame")

    h.addEventListener("click", async () => {
        main.innerHTML = newGame
        const gameInProgress = undefined;


        //faire une requete de récupération des jeux et detecté si une partie est en cours
        // Si non création d'une partie _ Si oui récupérer les équipes en lien avec le jeu.
        fetch('http://127.0.0.1:3001/api/games')
        .then(res => res.json()
            .then(data => {
                if (data !== null){
                    gameInProgress = data.filter(g => g.inProgress == true);
                    if (gameInProgress.length == 0){
                        fetch('http://127.0.0.1:3001/api/games', {
                            headers: {'Content-Type': 'application/json'},
                            method: 'POST'
                        })
                        .then(res => (console.log(res)))
                        .catch( error => console.log("Probleme avec le fetch de création d'un jeu", error))
       
                    }else {
                        fetch('http://127.0.0.1:3001/api/teams', {
                            headers: {'Content-Type': 'application/json'},
                            method: 'POST'
                        })
                        .then(res => (console.log(res)))
                        .catch( error => console.log("Probleme avec le fetch de récupération des teams", error))

                    }
                }
            })
        ) 
        .catch( error => console.log("Probleme avec le fetch de récupération des games", error))

        const add = document.querySelector('#teamsArray > button ')
        add.addEventListener("click", async () => {
            main.innerHTML = addTeam
        })


        const run = document.getElementById("run")
        run.addEventListener("click", async () => {

        })
    })


}

export default newGame;