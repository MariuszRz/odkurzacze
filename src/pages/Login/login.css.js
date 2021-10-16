import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
    width: 500px;
    margin: 50px auto;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.color.main.normal};

    p {
        font-size: 1.5em;
        color: ${(props) => props.theme.color.main.normal};
    }
    form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        color: ${(props) => props.theme.color.main.normal};
    }
`;
