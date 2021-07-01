# Install dependencies

```bash
npm install
```

# Launch project
```bash
npm start
```

### Add new pages
* Create file page in ```/pages ``` folder
* Create logical component in ```/script/components``` folder
* Load component in ```init.js```, and pass as params page name

Example: 
```sh
/pages
    - nameofPage.html
/script
    /components
        - nameOfComponent.js
```

init.js
```js
import nameOfComponent from './components/nameOfComponent.js'
...
const { nameOfPage } = await pages()
...
nameOfComponent(nameOfPage)
```

### Wireframe
https://www.figma.com/file/vhCdwwt7CCKHjr88oe33so/Fil-rouge-React?node-id=0%3A1

### Dossier Projet
https://docs.google.com/document/d/1wa-kIRFWZi8mj8fWR0tR9Pimb6GoFcRbB_JZnHXBMc0/edit?usp=sharing
