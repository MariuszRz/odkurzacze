import styled from "styled-components";

export const Wrapper = styled.form`
    margin: 15px 5px;
    label {
        max-width: 550px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 5px;
        border-radius: 8px;
        border-top: 2px solid ${(props) => props.theme.color.main.light};
        border-left: 2px solid ${(props) => props.theme.color.main.light};
        border-bottom: 2px solid ${(props) => props.theme.color.main.dark};
        border-right: 2px solid ${(props) => props.theme.color.main.dark};

        color: ${(props) => props.theme.color.text.light};
        background-color: ${(props) => props.theme.color.main.normal};
        transition: background-color 0.2s ease-in-out;

        svg {
            width: 32px;
            height: 32px;
            margin-right: 8px;
        }

        &:hover {
            background-color: ${(props) => props.theme.color.main.light};
        }
    }
    input[type="file"] {
        display: none;
    }
`;
