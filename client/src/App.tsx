import { useEffect } from "react";
import logo from "./logo.svg";

import "./App.css";

const { REACT_APP_HOST_NAME, REACT_APP_SERVER_PORT } = process.env;

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${REACT_APP_HOST_NAME}:${REACT_APP_SERVER_PORT}/record`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();

      console.log(record);
    }

    fetchData();

    return;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
