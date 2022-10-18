import { Container } from "./styles";

export default function AddArea() {
  return (
    <Container>
      <div className="image">+</div>
      <input type="text" placeholder="Adicionar nova tarefa"></input>
    </Container>
  );
}
