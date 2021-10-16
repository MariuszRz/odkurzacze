import { Loading } from "components";
import Image from "./Components/Image";
import React, { useEffect, useState } from "react";
import axios from "../../axios";

const Category = () => {
    const [category, setCategory] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        async function get_navigation() {
            const res = await axios.get("/category.json");
            setCategory(res.data);
            setLoad(false);
        }
        get_navigation();
        return () => {
            setCategory([]);
        };
    }, []);

    if (load) return <Loading />;

    return (
        <>
            Galeria
            {Object.keys(category).map((item, i) => (
                <Image item={item} key={i} />
            ))}
        </>
    );
};

export default Category;
