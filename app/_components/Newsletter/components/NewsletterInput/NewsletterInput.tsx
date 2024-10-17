import React, { useEffect, useState } from "react";
import { InputWrapper, Input, IconeEmail, AssinarButton } from "./styled";

function NewsletterInput() {
    const [email, setEmail] = useState<string>("");
    const [sentForm, setSentForm] = useState<boolean>(false);

    function validaEmail(email: string): boolean {
      if(email.length <= 5 || !email.includes("@")) return false;

      const fakeValidEndings: string[] = [
        ".com",
        ".com.br",
        ".net",
        ".org",
        ".co"
      ]

      if(!fakeValidEndings.some((v) => email.includes(v))) return false;

      return true;
    }

    function handleEmailSubmit(e: React.FormEvent) {
      e.preventDefault();
      if(sentForm) return;

      if(!validaEmail(email)) return;
      setSentForm(true);

    }

    return (
        <InputWrapper onSubmit={(e) => handleEmailSubmit(e)} isVisible={!sentForm}>
          
            <IconeEmail style={sentForm? {width: 0, margin: 0, color: "transparent"} : {}}/>
            <Input 
              placeholder={!sentForm? "Insira seu e-mail" : "" }
              onChange={(e) => setEmail(e.target.value)}
              value={!sentForm? email : ""}
              style={sentForm? {width: 0, margin: 0, padding: 0} : {}}
            />
            <AssinarButton
                disabled={!validaEmail(email)}
                type="submit"
                style={sentForm? {textWrap: "nowrap", backgroundColor: "rgb(141, 206, 151)", boxShadow: "10px 10px 30px 0px rgba(141, 206, 151, 0.3)", cursor: "auto"} : {}}
            >
                {!sentForm? "Assinar Newsletter" : "Cadastro realizado com sucesso."}
            </AssinarButton>
        </InputWrapper>
    );
}

export default NewsletterInput;
