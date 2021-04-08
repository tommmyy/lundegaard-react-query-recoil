import "recoil";

import "./App.css";
import { Button, Flex, View } from "@adobe/react-spectrum";

const App = () => {
  return (
    <main className="App">
      <Flex direction="column" gap="size-100" alignItems="center">
        <Button variant="cta" onPress={() => alert("Hey there!")}>
          Hello React Spectrum!
        </Button>
        <Button onPress={() => alert("Hey there!")}>
          Hello React Spectrum!
        </Button>
      </Flex>
    </main>
  );
};

export default App;
