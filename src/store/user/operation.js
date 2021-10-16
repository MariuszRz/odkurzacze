const fetchLogin = async (auth) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: "POST",
        headers: {
            auth,
        },
    });
    let data = await res.json();
    return data.user;
};

export const checkLogin = () => async (dispatch) => {
    if (localStorage.getItem("auth")) {
        const res = await fetchLogin(localStorage.getItem("auth"));
        dispatch({ type: "SET_USER", items: res });
    }
};
