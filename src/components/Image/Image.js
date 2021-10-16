import React from "react";
import { Wrapper } from "./image.css";

const Image = ({ img }) => {
    return (
        <Wrapper>
            <img
                src={`${process.env.REACT_APP_API_URL}${img.thumbnail}`}
                alt="img"
            />
        </Wrapper>
    );
};

export default Image;
