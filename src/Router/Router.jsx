import {Navigate, Route, Routes} from "react-router-dom";
import {useMemo, useState} from "react";

import {ROUTE_LIST} from "./Router.utiles";

const INITIAL_STATE = () => ({
    routes: ROUTE_LIST()
});

const Router = () => {

    /** State */
    const [state] = useState(INITIAL_STATE());


    /** Method */
    const getRoutes = (route) => route.map(({path, element: Element, name}) => <Route key={name} path={path}
                                                                                      element={<Element/>}/>);

    const routes = useMemo(() => getRoutes(state.routes), [state.routes]);

    return (
        <>
            <Routes>
                {routes}
                <Route path={"*"} element={<Navigate to={'/rtk'} replace/>}/>
            </Routes>
        </>
    );
};

export default Router;