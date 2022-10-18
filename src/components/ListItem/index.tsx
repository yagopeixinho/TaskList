import { Container } from "./styles";
import { Item } from "../../types/item";
import { useState } from "react";

type Props = {
  item: Item;
};

export default function ListItem({ item }: Props) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(ev) => {
          setIsChecked(ev.target.checked);
        }}
      />
      <label>{item.name}</label>
    </Container>
  );
}
