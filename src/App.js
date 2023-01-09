import {BrowserRouter} from "react-router-dom";

import Router from "./Router/Router";
import {DefaultLayout} from "./Components";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <DefaultLayout>
                <Router/>
            </DefaultLayout>
        </BrowserRouter>
    );
}

export default App;
