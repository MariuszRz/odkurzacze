import React from "react";
import { MdPlaylistAdd } from "react-icons/md";
import { Button } from "components";
import { Wrapper, MainLink } from "./categoryListAdmin.css";

const CategoryListAdmin = ({ category, add_ctagory }) => {
    return (
        <Wrapper>
            <div className="header">
                <h2>Albumy</h2>
                <Button dark onClick={() => add_ctagory()} title="Dodaj album">
                    <MdPlaylistAdd />
                </Button>
            </div>
            <ul>
                {Object.keys(category).map((item, i) => (
                    <li item={item} key={item}>
                        <MainLink to={`/admin/${item}`}>
                            {category[item].name}
                        </MainLink>
                    </li>
                ))}
                <li className="active">aktywny</li>
            </ul>
        </Wrapper>
    );
};

export default CategoryListAdmin;
