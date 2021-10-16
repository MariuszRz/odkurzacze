import React, { useEffect, useState } from "react";
import axios from "../../axios";

const Category = () => {
    const [category, setCategory] = useState(["jfj", "gege"]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        async function get_navigation() {
            const res = await axios.get("/category.json");
            setCategory(res.data);
        }
        get_navigation();
        return () => {
            setCategory([]);
        };
    }, []);
    console.log(category["4c2eb7ce3638d3f09debe15d7c8daec9"]);

    return (
        <div>
            Kategorie
            {Object.keys(category).map((item, i) => (
                <li key={i}>
                    <span>{category[item].name}</span>
                </li>
            ))}
        </div>
    );
};

export default Category;
