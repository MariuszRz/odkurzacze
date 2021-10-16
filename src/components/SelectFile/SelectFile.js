import React from "react";
import { Wrapper } from "./SelectFile.css";
import { RiImageAddFill } from "react-icons/ri";
const SelectFile = ({ add_image }) => {
    function submit(e) {
        // e.preventDefault();
        add_image(e.target.files[0]);
    }

    return (
        <Wrapper>
            <label htmlFor="image">
                <RiImageAddFill /> Kliknij aby wybrać zdjęcie z komputera i
                dodać je do galerii.
            </label>
            <input onChange={submit} type="file" name="image" id="image" />
        </Wrapper>
    );
};

export default SelectFile;
