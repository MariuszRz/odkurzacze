import styled from "styled-components";

export const Wrapper = styled.div`
    width: 24%;
    aspect-ratio: 4 / 3;
    /* height: 350px; */
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    /* border-radius: 8px; */
    border: 8px solid white;
    box-shadow: 0 0 8.4px rgba(0, 0, 0, 0.3);

    @media only screen and (max-width: 1248px) {
        width: 32%;
    }
    @media only screen and (max-width: 1024px) {
        width: 49%;
    }
    @media only screen and (max-width: 815px) {
        width: 95%;
    }
    img {
        min-width: 100%;
        min-height: 100%;
        /* border-radius: 8px; */

        transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;
        cursor: pointer;
        &:hover {
            filter: brightness(1.2);
            transform: scale(1.1);
        }
    }
`;
