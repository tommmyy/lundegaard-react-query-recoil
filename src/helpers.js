import { Flex } from "@adobe/react-spectrum";

export const Center = ({ children }) => (
  <Flex alignItems="center" justifyContent="center">
    {children}
  </Flex>
);
export const Column = props => (
  <Flex direction="column" alignItems="center" {...props} />
);
