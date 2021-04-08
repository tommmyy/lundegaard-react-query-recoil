import { Button, Flex, Grid, repeat } from "@adobe/react-spectrum";
import { useState, createContext, useContext } from "react";
import { Center } from "./helpers";

// New context
const CookieContext = createContext(0);

// No prop drilling
const CookieController = () => {
  const { cookies, setCookies } = useContext(CookieContext);
  return (
    <Button variant="cta" onPress={() => setCookies(cookies + 1)}>
      Gimme Cookie!
    </Button>
  );
};

// No prop drilling
const CookieJar = () => {
  const { cookies } = useContext(CookieContext);
  return (
    <Grid
      columns={repeat("auto-fit", "size-800")}
      autoRows="size-800"
      justifyContent="center"
      gap="size-100"
      width="100%"
    >
      {Array(cookies)
        .fill()
        .map((_, i) => (
          <Center key={i}>
            <Cookie />
          </Center>
        ))}
    </Grid>
  );
};

const Ex2Context = () => {
  // Passing state to context
  const [cookies, setCookies] = useState(0);

  return (
    <CookieContext.Provider value={{ cookies, setCookies }}>
      <Flex direction="column" gap="size-100" alignItems="center">
        <CookieController />
        <CookieJar />
      </Flex>
    </CookieContext.Provider>
  );
};
export default Ex2Context;

const Cookie = ({ style, ...rest }) => (
  <span
    style={{
      fontSize: "min(12vw, 100px)",
      ...style
    }}
    {...rest}
  >
    🍪
  </span>
);
