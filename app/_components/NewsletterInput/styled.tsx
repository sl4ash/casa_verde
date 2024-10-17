import styled from "styled-components";
import { MdMailOutline } from "react-icons/md";

const InputWrapper = styled.form`
  height: 5rem;
  display: flex;
  width: 100%;
  gap: 0px;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
  background-color: white;
`;

const Input = styled.input`
  font-family: inherit;
  font-size: 16px;
  border: none;
  &::placeholder {
    opacity: 0.6;
  }
  width: 65%;
  &:focus {
    outline: none;
  }
`;

const AssinarButton = styled.button`
    background-color: rgb(255, 203, 71);
    border: none;
    box-shadow: 10px 10px 30px 0px rgba(255, 203, 71, 0.3);
    height: 100%;
    flex: 1;
    font-family: inherit;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        box-shadow: 10px 10px 30px 0px rgba(255, 203, 71, 1);
    }
`;

const IconeEmail = styled(MdMailOutline)`
    align-self: center;
    margin: 0 10px;
    color: rgb(153, 153, 153);
    font-size: 24px;
`

export { InputWrapper, Input, AssinarButton, IconeEmail }