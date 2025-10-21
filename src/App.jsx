import './App.css';
import MebsLogo from './assets/mebs-logo.png';
import DevSig from './assets/dev-doc-logo.svg';

function App() {
  return (
    <>
      <div clas>
        <img className="__MebsLogo logo" src={MebsLogo} alt="MEBS Logo" />
        <img
          className="__DevSigLogo logo"
          src={DevSig}
          alt="Dev Signature Logo"
        />
      </div>

      <p className="read-the-docs">Mandla Ebhubesi Business Solutions</p>
    </>
  );
}

export default App;
