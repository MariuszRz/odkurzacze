import { Loading } from "components";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import localStorage from "store/localStore";
import { Redirect } from "react-router";
const Logout = () => {
    const { auth, login } = useSelector((state) => state.user);
    const [load, setload] = useState(true);
    const dispatch = useDispatch();

    async function fetchLogin(auth) {
        var formData = new FormData();

        formData.append("action", "logout");

        await fetch(`${process.env.REACT_APP_API_URL}/`, {
            method: "POST",
            headers: { auth },
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.user.login) {
                    dispatch({ type: "SET_USER", items: res.user });
                    localStorage("auth", res.user.auth);
                } else {
                    dispatch({ type: "SET_LOGOUT" });
                    localStorage("auth", null);
                }
                setload(false);
            });
    }

    useEffect(() => {
        fetchLogin(auth);
        return () => {};
    }, [auth]);

    return (
        <div>
            {!login && <Redirect to="/" />}
            {load && <Loading />}
            Wylogowywanie...
        </div>
    );
};

export default Logout;
