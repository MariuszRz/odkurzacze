import styled, { css } from "styled-components";

export const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: ${(props) => props.theme.color.main.normal};
    border: 1px solid ${(props) => props.theme.color.main.dark};
    color: ${(props) => props.theme.color.text.light};
    border-radius: 5px;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    cursor: pointer;
    svg {
        width: 20px;
        height: 20px;
    }
    &:hover {
        background-color: ${(props) => props.theme.color.main.dark};
        color: ${(props) => props.theme.color.text.light};
    }

    ${(props) =>
        props.green &&
        css`
            background-color: ${(props) => props.theme.color.green.normal};
            border: 1px solid ${(props) => props.theme.color.green.dark};
            color: ${(props) => props.theme.color.text.dark};
            &:hover {
                background-color: ${(props) => props.theme.color.green.dark};
                color: ${(props) => props.theme.color.text.light};
            }
        `}
    ${(props) =>
        props.red &&
        css`
            background-color: ${(props) => props.theme.color.red.normal};
            border: 1px solid ${(props) => props.theme.color.red.dark};
            color: ${(props) => props.theme.color.text.light};
            &:hover {
                background-color: ${(props) => props.theme.color.red.dark};
            }
        `}
    
    ${(props) =>
        props.dark &&
        css`
            background-color: ${(props) => props.theme.color.main.dark};
            border: 1px solid ${(props) => props.theme.color.main.light};
            color: ${(props) => props.theme.color.main.light};
            &:hover {
                background-color: ${(props) => props.theme.color.main.normal};
            }
        `}
`;
