import { Router } from "@reach/router";
import "./App.css";
import Ex1Vanilla from "./Ex1Vanilla";
import Ex2Context from "./Ex2Context";
import Ex3Atom from "./Ex3Atom";
// import Ex3Atom from "./Ex3Atom-finish";
import Ex4Selector from "./Ex4Selector";
// import Ex4Selector from "./Ex4Selector-finish";

const App = () => {
  return (
    <main className="App">
      <Router>
        <Ex1Vanilla path="/" />
        <Ex2Context path="/2" />
        <Ex3Atom path="/3" />
        <Ex4Selector path="/4" />
      </Router>
    </main>
  );
};

export default App;
