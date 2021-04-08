import { Button, Flex } from "@adobe/react-spectrum";

const BasicAtoms = () => (
  <Flex direction="column" gap="size-100" alignItems="center">
    <Button variant="cta" onPress={() => alert("Hey there!")}>
      Gimme Cookie!
    </Button>
  </Flex>
);
export default BasicAtoms;
