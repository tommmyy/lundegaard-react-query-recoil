import {
  Button,
  Item,
  Picker,
  Flex,
  Grid,
  repeat,
  Text
} from "@adobe/react-spectrum";
import { NumberField } from "@react-spectrum/numberfield";
import { Fragment } from "react";
import {
  atom,
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
  selector
} from "recoil";
import { Center } from "./helpers";
import styles from "./cookieJar.module.css";

const ENERGY_PER_COOKIE_CAL = 400;
const CAL_to_J = 4.184;

// New atom
const cookiesAtom = atom({ key: "cookies", default: 0 });

const unitAtom = atom({ key: "unit", default: "j" });

const totalEnergySelector = selector({
  key: "totalEnergy",
  get: ({ get }) => {
    const unit = get(unitAtom);
    const cookies = get(cookiesAtom);

    return ENERGY_PER_COOKIE_CAL * cookies * (unit === "j" ? CAL_to_J : 1);
  },
  set: ({ get, set }, value) => {
    const unit = get(unitAtom);

    set(
      cookiesAtom,
      Number(value) / ENERGY_PER_COOKIE_CAL / (unit === "j" ? CAL_to_J : 1)
    );
  }
});

const CookieController = () => {
  const setCookies = useSetRecoilState(cookiesAtom);
  const [unit, setUnit] = useRecoilState(unitAtom);
  const [totalEnergy, setTotalEnergy] = useRecoilState(totalEnergySelector);

  return (
    <Flex gap="size-100" direction="column">
      {totalEnergy}
      <NumberField
        width="100%"
        label="Total energy"
        value={totalEnergy}
        onChange={setTotalEnergy}
        minValue={0}
      />

      <Picker label="Unit" selectedKey={unit} onSelectionChange={setUnit}>
        <Item key="j">J</Item>
        <Item key="cal">cal</Item>
      </Picker>

      <Button
        variant="cta"
        onPress={
          // updater
          () => setCookies(cookies => cookies + 1)
        }
      >
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
          {Array(Math.floor(cookies))
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

const Ex4SelectorFinish = () => {
  return (
    <Flex direction="column" gap="size-100" alignItems="center">
      <CookieController />
      <CookieJar />
    </Flex>
  );
};

export default Ex4SelectorFinish;

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
