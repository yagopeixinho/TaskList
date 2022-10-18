import { Container } from "./styles";
import { Item } from "../../types/item";
import { useState } from "react";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export default function ListItem({ item, onChange }: Props) {
  return (
    <Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(ev) => {
          onChange(item.id, ev.target.checked);
        }}
      />
      <label>{item.name}</label>
    </Container>
  );
}
