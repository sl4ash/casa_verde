import styled from "styled-components";
import { MdMailOutline } from "react-icons/md";

const InputWrapper = styled.form<{ $isVisible: boolean }>`
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
    transition: 0.5s;
    &::placeholder {
        opacity: 0.6;
    }
    width: 65%;
    &:focus {
        outline: none;
    }
`;

const AssinarButton = styled.button`
    flex: 1;
    background-color: rgb(255, 203, 71);
    border: none;
    box-shadow: 10px 10px 30px 0px rgba(255, 203, 71, 0.3);
    height: 100%;
    font-family: inherit;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: width 0.5s 2s, background-color 0.2s, color 0.2s, box-shadow 0.2s;
    font-weight: 500;
    overflow: hidden;

    &:hover {
        background-color: rgb(141, 206, 151);
        box-shadow: 10px 10px 30px 0px rgba(141, 206, 151, 0.3);
    }

    &:disabled {
        background-color: rgb(240, 204, 115);
        box-shadow: none;
        cursor: not-allowed;
        color: rgb(100, 100, 100);
    }
    &:focus {
      background-color: rgb(141, 206, 151);
      box-shadow: 10px 10px 30px 0px rgba(141, 206, 151, 0.3);
    }
`;

const IconeEmail = styled(MdMailOutline)`
    align-self: center;
    margin: 0 10px;
    color: rgb(153, 153, 153);
    font-size: 24px;
    transition: width 0.5s;
`;

export { InputWrapper, Input, AssinarButton, IconeEmail };
