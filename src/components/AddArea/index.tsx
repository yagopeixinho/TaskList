import React, { useState } from "react";
import { Container } from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export default function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <Container>
      <div className="image">+</div>
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={inputText}
        onChange={(ev) => setInputText(ev.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
}
