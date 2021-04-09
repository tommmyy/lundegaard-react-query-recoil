// implement invalidation
// const queryClient = useQueryClient();
// { onSuccess: () => { queryClient.invalidateQueries("todos"); } }

import { Text, ListBox, Item, View } from "@adobe/react-spectrum";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getRandomId, Column, TodoForm } from "./helpers";
import { Fragment } from "react";

const TODOS_URL = "http://localhost:3001/todos";

const Todos = () => {
  const { isLoading, isFetching, error, data } = useQuery("todos", async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return axios.get(TODOS_URL).then(response => response.data);
  });

  if (error) return "An error has occurred: " + error.message;

  if (isLoading) return "Loading...";

  return (
    <Fragment>
      <ListBox flexGrow={1} aria-label="Todos">
        {data?.map(({ id, value }) => <Item key={id}>{value}</Item>)}
      </ListBox>
      {isFetching && "Fetching..."}
    </Fragment>
  );
};

const Ex8Mutation = () => {
  const addTodoMutation = value =>
    axios.post(TODOS_URL, { id: getRandomId(), value });

  const { mutate: addTodo } = useMutation(addTodoMutation);

  return (
    <Column>
      <Column width="size-3600">
        <TodoForm onAddTodo={addTodo} />
      </Column>
      <View width="size-3600" margin="auto">
        <Todos />
      </View>
    </Column>
  );
};

export default Ex8Mutation;
