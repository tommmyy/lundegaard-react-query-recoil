// unitAtom
// energySelector
// energySelector - set
// Math.floor
import {
  Picker,
  Item,
  Button,
  Flex,
  Grid,
  repeat,
  Text
} from "@adobe/react-spectrum";
import { NumberField } from "@react-spectrum/numberfield";
import { Fragment } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { Center } from "./helpers";
import styles from "./cookieJar.module.css";

const cookiesAtom = atom({ key: "cookies", default: 0 });

const CookieController = () => {
  const setCookies = useSetRecoilState(cookiesAtom);

  return (
    <Flex gap="size-100" direction="column">
      <NumberField
        isDisabled
        width="100%"
        label="Total energy"
        defaultValue={0}
        minValue={0}
      />

      <Picker label="Unit" selectedKey={"j"} onSelectionChange={() => {}}>
        <Item key="j">J</Item>
        <Item key="cal">cal</Item>
      </Picker>

      <Button variant="cta" onPress={() => setCookies(cookies => cookies + 1)}>
        Gimme Cookie!
      </Button>
    </Flex>
  );
};

const CookieJar = () => {
  // const [cookies] = useRecoilState(cookiesAtom);
  const cookies = useRecoilValue(cookiesAtom);
  return (
    <Fragment>
      <Text>no.: {cookies}</Text>
      <div className={styles.CookieJar}>
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
      </div>
    </Fragment>
  );
};

const Ex4Selector = () => {
  return (
    <Flex direction="column" gap="size-100" alignItems="center">
      <CookieController />
      <CookieJar />
    </Flex>
  );
};

export default Ex4Selector;

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
