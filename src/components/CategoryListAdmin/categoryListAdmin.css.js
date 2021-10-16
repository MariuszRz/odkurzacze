import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    color: ${(props) => props.theme.color.text.light};
    background-color: ${(props) => props.theme.color.main.normal};
    min-height: 90vh;
    .header {
        display: flex;
        padding: 10px 20px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: ${(props) => props.theme.color.main.dark};
        h2 {
            text-transform: uppercase;
        }
    }
    ul {
        list-style: none;
    }
`;

export const MainLink = styled(NavLink)`
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 8px 20px;
    margin: 8px 0;
    cursor: pointer;
    color: ${(props) => props.theme.color.text.light};
    transition: background-color 0.2s ease-in-out,
        border-radius 0.3s ease-in-out, margin-left 0.3s ease-in-out,
        color 0.2s ease-in-out;
    &:hover {
        background-color: ${(props) => props.theme.color.main.light};
    }
    &.active {
        background-color: white;
        border-radius: 5px 0 0 5px;
        margin-left: 10px;
        color: ${(props) => props.theme.color.main.dark};
    }
`;
