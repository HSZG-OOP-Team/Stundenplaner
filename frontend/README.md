npm# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Kommentar Projektmanagement

_How to get started?_

- Node.js muss installiert sein \
- React und andere Dependencies müssen installiert sein -> `npm i` \
- `npm i` bzw. `npm install` kümmert sich drum das alle Dependencies des Projekts die in der `package.json` stehen bei euch installiert werden

_How to run the App?_
- `npm start` zum testen des Forntends nutzen - siehe weiter unten in dieser Datei

Wichtige Dateien:

```
App.css -> CSS für Startseite \
App.js -> Startseite \
index.css -> Root CSS \ 
index.js -> Root - von react ausgeführt \
package.json -> Dependencies 
```
_<p style="font-size: 12px; color: gray;">vgl. Dateistruktur</p>_

### Wahl der Formatierung

Vorzugsweise InlineCSS:
- Tailwind -> `className="[Klasse mit Formatierung], ..."`
```
<div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
    <h2 className="text-xl font-bold mb-4">Tailwind Modal</h2>
    <p>Ich sehe gut aus, aber du musstest mich selbst zusammenbauen.</p>
</div>
```
- Material UI -> vorgefertigte Tags und Formatierung mit `sx={{width: 300, ...}}` \
```
<Button variant="contained" sx={{width: 300, ...}}>Klick mich</Button>
```

Dokumentation:
- Tailwind CSS: https://tailwindcss.com/docs/installation/using-vite \
oder \
- MUI Components: https://mui.com/material-ui/getting-started/ \
- MUI Styles: https://mui.com/system/getting-started/

---
## Dateistruktur in frontend\search

```text
src/
├── components/          # wiederverwendbare Komponenten (Studenplaner spezifisch)
│   ├── Button.js        # einige Beispiele...
│   ├── InputField.js
│   └── Navbar.js
│
├── pages/               # Pages (ganze Bildschirmansichten)
│   ├── Login/
│   │   ├── LoginPage.js # Die Hauptseite für den Login
│   │   └── LoginCard.js # Ein spezifisches Widget nur für den Login-Kasten
│   └── Dashboard/
│       └── DashboardPage.js
│
├── App.js               # Hier wird gesteuert, welche Page gerade aktiv ist
├── index.js             # Der Root-Einstiegspunkt
└── ...
```

## Ablauf zu Beginn des Workflows

Lokalen Branch auf den neusten Stand bringen:

```text
# 1. Bring dein lokales Git auf den neuesten Stand (schaut nach, was es auf GitHub Neues gibt)
git fetch origin

# 2. Zieh dir die neuesten Änderungen von GitHub auf deinen PC
git pull origin frontend
```

> [!WARNING]
> **Achtung!** Damit alles damit alles funktioniert:
> Führe `npm i` bzw. `npm install` aus im Falle einer Änderung in `package.json` oder `package-lock.json`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
