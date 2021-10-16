import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styled/theme";
import GlobalStyle from "styled/globalStyled";
import { Header } from "components";
import { Category, Galery, HomePage } from "pages";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/galery" exact component={Category} />
                    <Route path="/galery/:id" exact component={Galery} />
                </Switch>
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
