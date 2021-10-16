import React from "react";

const Image = ({ item }) => {
    const { name, src } = item;
    return (
        <div>
            <img src={src} alt="img" />
            <p>{name}</p>
        </div>
    );
};

export default Image;
