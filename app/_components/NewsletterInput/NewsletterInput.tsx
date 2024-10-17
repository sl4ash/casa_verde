import React from "react";
import { InputWrapper, Input, IconeEmail, AssinarButton } from "./styled";

function NewsletterInput() {
  return (
    <InputWrapper>
        <IconeEmail />
      <Input placeholder="Insira seu e-mail" />
      <AssinarButton type="submit" onClick={(e) => e.preventDefault()}>Assinar Newsletter</AssinarButton>
    </InputWrapper>
  );
}

export default NewsletterInput;
