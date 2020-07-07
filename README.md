# centralspace-view

RULES:
- use arrow functions instead function()
- use contructor in class component
- use IMMUTABLE data like arrays ->  slice() instead push()
- convention: on[Event], and handle function handle[Event]
- spread operator:
let player = {score: 1, name: 'Jeff'};
let newPlayer = {...player, score: 2};
- use let instead const if not needed
- React.Component
- this.state.comment =  WRONG /  this.setState({comment: ' ' });  or  ...state, comment GOOD
- use componentDidMount and componentWillUnmount or Hook-s
- class Component with state <&Function1 handleAndSetState={...} /> -> Function1 (props.handleAndSetState()), Function2 (props.handleAndSetState())
to synchronize state within 2 components use one general component and pass to these components
- data flow from top to bottom. Oposite is WRONG
- key declaration ->   <&ListItem key={...} />  insted function ListItem ... <&li key={...}>
- key not exist in component props, you should pass id
- multiple ansews <&select multiple={true} value={['B', 'C']}>
- children props: function FancyBorder(props) {  ... props.children  }   ->    <&FancyBorder> <&input value={} onChange={} ...  <&/FancyBorder>
- IMPORTANT -> how build app. First create static content, later implement state and data flow. First implement components on bottom and go to top.
- STATE: rules how decide that parametr should be go to state param:
a) if we pass param to props is not state param (???)
b) if state is static we don't pass it to state
c) if we can generate param using another state param we don't pass it to state
- instead wrapping by <&div> ... <&/div> use <&React.Fragment> or <> ... </> (we can't pass key to it).
 Warning! In some cases it witt crash app (SignedInLinks)
 - React Context (use it only when we want to share data for many children components)

Extensions:
for Visual Studio Code:
- ES7 React/Redux/GraphQL/React-Native snippets
- Eslint
- Auto Close Tag
- Monokai++
- Bracket Pair Color
- Eslint
- GitLens — Git supercharged
- json
- Material Icon Theme
- Prettier
- Language Support for Java(TM) by Red Hat
- Debugger for Chrome (run F5)
- Visual Studio IntelliCode
- Live Server
- HTML Snippets
- HTML CSS Support
- React Dev Tools - Chrome
- IntelliSense for CSS class names in HTML
- Settings Sync (gist ec5578fef14c2236e3f6055b37358ee1)
- Materialize Snippets 
- TabNine
- Git history
- CSS Formatter

Links:
- http://localhost:7773/
- https://reactjs.org/
- https://babeljs.io/
- https://pl.reactjs.org/docs/state-and-lifecycle.html
- https://jsonplaceholder.typicode.com/
- https://github.com/facebook/create-react-app
- https://materializecss.com/getting-started.html
- https://codepen.io/  -> to training
- https://redux.js.org/
- https://firebase.google.com/


Env:
- port: 7773
- npm install react-router-dom
- npm install axios
- npm install http-proxy-middleware --save
- npm install redux-thunk
- npm install firebase
- npm i jquery
- npm install -g parcel-bundler  / npm init -y (read about this)
- npm install react-redux-firebase redux-firestore
- npm i react-router-redux
- npm install react-bootstrap bootstrap
- npm install moment
- npm i loadjs
- npm i leaflet
- npm i react-leaflet
- npm install --save materialize-stepper
- npm install @material-ui/core
- npm install -g firebase-tools / firebase login / firebase init / firebase deploy <all or function(firebase deploy --only functions)>
/  npm run build  / firebase deploy / => https://console.firebase.google.com/project/centralspace-view/overview (https://centralspace-view.web.app/signin)
- npm i -g html-to-react-components (html2react index.html)
- npm install uuid
- Cloud Firestore
- Eslint formating
- Express vs Axios

Shortcut:
shift + alt + down arrow
etc -> class component
rfce -> functional component

