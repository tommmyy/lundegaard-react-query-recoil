import { Router } from "@reach/router";
import Ex1Vanilla from "./Ex1Vanilla";
import Ex2Context from "./Ex2Context";
import Ex3Atom from "./Ex3Atom";
// import Ex3Atom from "./Ex3Atom-finish";
import Ex4Selector from "./Ex4Selector";
// import Ex4Selector from "./Ex4Selector-finish";
import Ex5Snapshot from "./Ex5Snapshot";
import Ex6ReactQuery from "./Ex6ReactQuery";
import Ex7ReactQueryParams from "./Ex7ReactQueryParams";
import Ex8Mutation from "./Ex8Mutation";

import "./App.css";

const App = () => {
  return (
    <main className="App">
      <Router>
        <Ex1Vanilla path="/" />
        <Ex2Context path="/2" />
        <Ex3Atom path="/3" />
        <Ex4Selector path="/4" />
        <Ex5Snapshot path="/5" />
        <Ex6ReactQuery path="/6" />
        <Ex7ReactQueryParams path="/7" />
        <Ex8Mutation path="/8" />
      </Router>
    </main>
  );
};

export default App;
