import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
    font-weight: 600;
    transition: font-size 0.2s ease;
    &:before {
        content: "/";
        margin: 0px clamp(0px, 12px, 16px);
    }
    &:first-child:before {
        content: "";
    }
    &:hover {
        color: rgb(80, 75, 60);
    }
`;

export { Wrapper, NavLink }