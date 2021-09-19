import logo from "./assets/logo.png";
import "./App.css";
import deck from "./assets/AppreciationToken.pdf";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="logoContrainaer">
          {/* <div className="logo"> */}
          <img src={logo} height="200rem" width="200rem" />
          {/* </div> */}
          <div className="title">
            <h1>Appreciation Token </h1>
          </div>
        </div>

        <a href={deck} download="Deck.pdf" target="_blank">
          <button className="bn632-hover bn22">Download Deck</button>{" "}
        </a>
      </header>
    </div>
  );
}

export default App;
