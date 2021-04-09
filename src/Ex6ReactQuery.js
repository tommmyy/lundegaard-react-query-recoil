// useQuery - arguments, state
// DevTools
// List
// throw error
// console.log to show refetching on error
// add isFetching - focus on window
// 3rd arg { refetchOnWindowFocus:false }
// {staleTime:Infinity }
// {cacheTime:5000 }
// Second <Pokemon /> -> API communication
// Second <Pokemon /> with different queryKey -> API communication

import { Flex, Text, Button } from "@adobe/react-spectrum";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { Column } from "./helpers";

const Pokemon = () => {
  const { isLoading, error, data } = useQuery("pokemon", () => {
    // console.debug("Trying to fetch");
    // return Promise.resolve().then(() => {
    //   throw new Error("No pokemon");
    // });

    return axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.data.results);
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Column>
      {data.map(({ name }) => (
        <Text key={name}>{name}</Text>
      ))}
    </Column>
  );
};
const Ex6ReactQuery = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Column>
      <Button onPress={() => setIsOpen(!isOpen)} maxWidth="size-100">
        {isOpen ? "Close" : "Open"}
      </Button>
      <Flex>
        {isOpen && <Pokemon />}
        {/* <Pokemon /> */}
      </Flex>
    </Column>
  );
};

export default Ex6ReactQuery;
