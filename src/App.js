import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styled/theme";
import GlobalStyle from "styled/globalStyled";
import { Container, Header } from "components";
import {
    Admin,
    Category,
    Galery,
    HomePage,
    Login,
    Logout,
    Page404,
} from "pages";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Container>
                    <Route path="/" exact component={HomePage} />
                    <Switch>
                        <Route path="/logout" exact component={Logout} />
                        <Route path="/" exact component={Category} />
                        <Route path="/galery" exact component={Category} />
                        <Route path="/galery/:id" component={Galery} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/admin" component={Admin} />
                        <Route component={Page404} />
                    </Switch>
                </Container>

                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
