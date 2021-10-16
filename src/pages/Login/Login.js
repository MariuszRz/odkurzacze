import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import localStorage from "store/localStore";
import { Redirect } from "react-router";
import { Wrapper } from "./login.css";
const Login = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const login = useSelector((state) => state.user.login);

    async function fetchLogin(e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append("name", e.target.login.value);
        formData.append("password", e.target.password.value);
        formData.append("action", "login");

        await fetch(`${process.env.REACT_APP_API_URL}/`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.user.login) {
                    dispatch({ type: "SET_USER", items: res.user });
                    localStorage("auth", res.user.auth);
                } else {
                    setError(true);
                }
            });
    }

    return (
        <Wrapper>
            {login && <Redirect to="/admin/" />}
            <p>Zaloguj się</p>
            <form onSubmit={fetchLogin}>
                <label htmlFor="name">Login:</label>
                <input type="text" name="login" />
                <label htmlFor="password">Hasło:</label>
                <input type="password" name="password" />
                {error && <p>Błędny login lub hasło</p>}
                <button>Zaloguj</button>
            </form>
        </Wrapper>
    );
};

export default Login;
