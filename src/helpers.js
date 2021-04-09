import { Button, Flex, Form, TextField } from "@adobe/react-spectrum";
import { useState } from "react";

export const getRandomId = () => Math.round(Math.random() * 100000);

export const Center = ({ children }) => (
  <Flex alignItems="center" justifyContent="center">
    {children}
  </Flex>
);

export const Column = props => (
  <Flex direction="column" alignItems="center" {...props} />
);

export const TodoForm = ({ onAddTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <Form
      id="todo"
      onSubmit={event => {
        event.preventDefault();

        if (!todo) {
          return;
        }

        onAddTodo(todo);

        setTodo("");
      }}
    >
      <TextField label="Todo" value={todo} onChange={setTodo} />
      <Button type="submit">Add</Button>
    </Form>
  );
};
