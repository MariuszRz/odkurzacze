import React, { useState, useEffect } from "react";
import { Wrapper, BoxImage } from "./images.css";
import { Image, Loading, SelectFile } from "components";
import { useSelector } from "react-redux";

const Images = (props) => {
    const [load, setLoad] = useState(true);
    const [sendImg, setSendImg] = useState(false);
    const [images, setImages] = useState([]);

    const [nameCategory, setNameCategory] = useState([]);
    const category_key = props.match.params.key;

    const { auth } = useSelector((state) => state.user);

    async function get_images(category_key) {
        console.log("cat: ", category_key);
        setLoad(true);

        const res = await fetch(
            `${process.env.REACT_APP_API_URL}${category_key}.json`,
            {
                method: "GET",
            }
        );
        let data = await res.json();
        setNameCategory(data.name);
        setImages(data.items);

        setLoad(false);
    }

    async function add_image(e) {
        setSendImg(true);
        // e.preventDefault();
        console.log(e);
        var formData = new FormData();
        // formData.append("name", e.target.name.value);
        formData.append("category_key", category_key);
        formData.append("image", e);

        // formData.append("action", "login");
        const res = await fetch(`${process.env.REACT_APP_API_URL}`, {
            method: "POST",
            body: formData,
            headers: {
                auth,
            },
        });
        let data = await res.json();
        setNameCategory(data.name);
        setImages(data.items);

        setSendImg(false);
    }

    useEffect(() => {
        if (category_key !== "") {
            get_images(category_key);
            console.log("render - Image list");
        }
        return () => {
            setImages([]);
        };
    }, [category_key]);

    return (
        <Wrapper>
            {load ? (
                <Loading />
            ) : (
                <>
                    <h2>{nameCategory}</h2>
                    {sendImg ? (
                        <Loading />
                    ) : (
                        <SelectFile add_image={add_image} />
                    )}

                    <BoxImage>
                        {Object.keys(images).map((item, i) => (
                            <Image img={images[item]} key={item} />
                        ))}
                    </BoxImage>
                </>
            )}
        </Wrapper>
    );
};

export default Images;
