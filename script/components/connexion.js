const { net } = require('electron');

//check
function test_login() {
    console.log("Log ...")
}


const connexion = (main, { pages, scripts }) => {
    const login = document.getElementById("login")



    login.addEventListener("click", async () => {
        // once the page is set, we can interact with DOM element
        test_login()
        //main.innerHTML = connexion

        //Formulaire de connexion
        const form = document.querySelector("form")

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('e : ', e.target.login.value)
            let username = form.elements.login.value;
            let password = form.elements.mdp.value;
            console.log(password);
            //check si les champs sont correctement remplis (regex)
            if (username == "" || password == "") {
                console.log('error');

                let divMessage = document.getElementById('message');
                console.log('divMessage', divMessage);
                divMessage.classList.remove('hidden')
                let h3 = document.createElement('h3');
                h3.textContent = 'Mot de passe ou identifiant manquant';

                divMessage.appendChild(h3);
            }
            else {
                //requete https envoi vers API
                // const request = net.request('https://github.com')
                // const request = net.request({
                //     method: 'PUT',
                //     protocol: 'http:',
                //     hostname: '127.0.0.1',
                //     port: 3001,
                //     path: 'api/users'
                // })

                // request.on('login', (authInfo, callback) => {
                //     callback('username', 'password')
                // })


                fetch('http://localhost:3000/auth', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({ "login": username, "password": password })
                })
                    //.then(resp => console.log(resp.json()))
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);

                        //stocker le token reçu dans une session storage et rediriger vers la home si admin  =1
                        let tokenAdmin = '';
                        if (data.token) {
                            main.innerHTML = pages.home;
                            scripts.homeComponent(main, { pages, scripts });
                            let myStorage = window.sessionStorage;
                            sessionStorage.setItem('tokenadmin', data.token);
                        }

                        if (data && data.message) {

                            let divMessage = document.getElementById('message');
                            console.log('divMessage', divMessage);
                            divMessage.innerHTML = '';
                            divMessage.classList.remove('hidden')
                            let h3 = document.createElement('h3');
                            h3.textContent = data.message;
                            divMessage.appendChild(h3);
                        }

                    })
                    .catch((error) => {
                        console.log('Problème avec Fetch: ', error);

                    });

                //
            }

        })
    })
}

export default connexion


    // })


        //erreur si callback vide
    // request.on('response', (response) => {
    //     console.log(`STATUS: ${response.statusCode}`);
    //     response.on('error', (error) => {
    //         console.log(`ERROR: ${JSON.stringify(error)}`)
    //     })
    // })
    // request.on('login', (authInfo, callback) => {
    //     callback()
    // })






