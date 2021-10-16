import React, { useEffect, useState, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { Wrapper } from "./admin.css";
import { CategoryListAdmin, Loading } from "components";
import Swal from "sweetalert2";

import { HomePage, Images } from "pages";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../store/user/operation";

const Admin = () => {
    const { login, auth } = useSelector((state) => state.user);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    console.log("render - Admin");

    async function get_category() {
        const res = await fetch(
            `${process.env.REACT_APP_API_URL}category.json`,
            {
                method: "GET",
            }
        );
        let data = await res.json();
        setCategory(data);
        // const categoryKey = Object.keys(data)[0];
        // return <Redirect to={`/admin/${categoryKey}`} />;
    }

    function add_ctagory() {
        Swal.fire({
            title: "Podaj nazwę nowego albumu",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Dodaj",
            showLoaderOnConfirm: true,
            preConfirm: (nameCategory) => {
                var formData = new FormData();
                formData.append("name", nameCategory);
                formData.append("action", "add_category");
                return fetch(`${process.env.REACT_APP_API_URL}`, {
                    method: "POST",
                    body: formData,
                    headers: {
                        auth,
                    },
                })
                    .then((response) => {
                        console.log(response);
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .catch((error) => {
                        Swal.showValidationMessage(`Request failed: ${error}`);
                    });
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                setCategory(result.value.category);
            }
        });
    }

    useEffect(() => {
        dispatch(checkLogin());
        get_category();
        setLoading(false);
        return () => {
            // setCategory([]);
        };
    }, [dispatch]);

    if (loading) return <Loading />;
    if (!login && loading) return <Redirect to="/login" />;
    if (!login) return <Redirect to="/login" />;

    return (
        <Wrapper>
            <CategoryListAdmin
                category={category}
                add_ctagory={() => add_ctagory()}
            />
            <Switch>
                <Route path="/admin" exact component={HomePage} />
                <Route path="/admin/:key" component={Images} />
            </Switch>
        </Wrapper>
    );
};

export default memo(Admin);
