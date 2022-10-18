import { useState } from "react";
import { Container, Area, Header } from "./App.styles";
import { Item } from "./types/item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Teste 1", done: true },
    { id: 2, name: "Teste 2", done: true },
    { id: 3, name: "Teste 3", done: true },
    { id: 4, name: "Teste 4", done: true },
    { id: 5, name: "Teste 5", done: true },
    { id: 6, name: "Teste 6", done: true },
  ]);

  return (
    <Container>
      <Area>
        <Header>Task list</Header>
        {list.map((item, index) => (
          <div></div>
        ))}
      </Area>
    </Container>
  );
};

export default App;
