import { Text, Button, Flex, Grid, repeat } from "@adobe/react-spectrum";
import { Center } from "./helpers";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from "recoil";
import { Fragment } from "react";

// New atom
const cookiesAtom = atom({ key: "cookies", default: 0 });

const CookieController = () => {
  // const [cookies, setCookies] = useRecoilState(cookiesAtom);
  const setCookies = useSetRecoilState(cookiesAtom);

  /* <Button variant="cta" onPress={cookies => setCookies(cookies + 1)}> */
  /* <Button variant="cta" onPress={() => setCookies(cookies + 1)}> */
  return (
    <Button
      variant="cta"
      onPress={
        // updater
        () => setCookies(cookies => cookies + 1)
      }
    >
      Gimme Cookie!
    </Button>
  );
};

const CookieJar = () => {
  // const [cookies] = useRecoilState(cookiesAtom);
  const cookies = useRecoilValue(cookiesAtom);
  return (
    <Fragment>
      <Text>no.: {cookies}</Text>
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
    </Fragment>
  );
};

const Ex3AtomFinish = () => {
  return (
    <Flex direction="column" gap="size-100" alignItems="center">
      <CookieController />
      <CookieJar />
    </Flex>
  );
};

export default Ex3AtomFinish;

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
