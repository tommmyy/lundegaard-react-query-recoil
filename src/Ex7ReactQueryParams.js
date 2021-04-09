// queryKey as an array
// show caching

import { Flex, Text, Button, Provider } from "@adobe/react-spectrum";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { Column } from "./helpers";

const LIMIT = 20;

const Pokemon = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isFetching, error, data } = useQuery(
    ["pokemon", page],
    async () => {
      // const { isLoading, error, data } = useQuery("pokemon", async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      return axios
        .get(
          `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}&offset=${(page -
            1) *
            LIMIT}`
        )
        .then(response => response.data);
    }
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <Column>
      {data?.results.map(({ name }) => <Text key={name}>{name}</Text>)}

      <Provider isDisabled={!!isLoading}>
        <Flex gap="size-100">
          <Button
            isDisabled={!data?.previous}
            onPress={() => setPage(page - 1)}
          >
            Previous
          </Button>

          <Button isDisabled={!data?.next} onPress={() => setPage(page + 1)}>
            Next
          </Button>
        </Flex>
      </Provider>
      {isLoading ? <Text>Loading...</Text> : null}
      {isFetching ? <Text>Fetching...</Text> : null}
    </Column>
  );
};
const Ex7ReactQueryParams = () => {
  return (
    <Column>
      <Pokemon />
    </Column>
  );
};

export default Ex7ReactQueryParams;
