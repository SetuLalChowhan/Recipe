import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import HomeLogo from "./components/HomeLogo";


function App() {
    return (
        <BrowserRouter>
            <div>
                <HomeLogo/>
                <Search />
                <Category />
                <Pages />
            </div>
        </BrowserRouter>
    );
}

export default App;
