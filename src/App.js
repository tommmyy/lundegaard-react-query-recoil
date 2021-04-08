import { Router } from "@reach/router";
import "./App.css";
import BasicAtoms from "./BasicAtoms";

const App = () => {
  return (
    <main className="App">
      <Router>
        <BasicAtoms path="/" />
      </Router>
    </main>
  );
};

export default App;
