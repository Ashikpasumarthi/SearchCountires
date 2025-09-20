
import './App.css';
import CountryComponent from './CountryComponent';

function App() {
  return (
    <div className="App">
      <CountryComponent />
    </div>
  );
}

export default App;



// your ESLint setup is missing the react-app config.

// That config (eslint-config-react-app) normally comes preinstalled with Create React App (CRA).
// If you’ve reset dependencies or installed things manually, it may have been lost.

// npm install --save-dev eslint-config-react-app
