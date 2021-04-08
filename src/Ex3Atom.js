// RecoilRoot
// atom cookiesState
// cookiejar <Text>no.: {cookies}</Text>
// useRecoilState
// useRecoilValue
// useSetRecoilState

import { Button, Flex, Grid, repeat } from "@adobe/react-spectrum";
import { useState } from "react";
import { Center } from "./helpers";

const CookieController = ({ onAddCookie }) => {
  return (
    <Button variant="cta" onPress={() => onAddCookie()}>
      Gimme Cookie!
    </Button>
  );
};

const CookieJar = ({ cookies }) => {
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

const Ex3Atom = () => {
  const [cookies, setCookies] = useState(0);

  return (
    <Flex direction="column" gap="size-100" alignItems="center">
      <CookieController
        onAddCookie={() => {
          setCookies(cookies + 1);
        }}
      />
      <CookieJar cookies={cookies} />
    </Flex>
  );
};

export default Ex3Atom;

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
