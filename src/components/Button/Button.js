import React from "react";
import { Wrapper } from "./buttons.css";

const Button = (props) => {
    return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default Button;
