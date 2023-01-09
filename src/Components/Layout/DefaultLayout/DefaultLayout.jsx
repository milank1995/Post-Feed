import {useState} from "react";
import {NavLink} from "react-router-dom";

import {ROUTE_LIST} from "../../../Router/Router.utiles";
import Classes from "./DefaultLayout.module.css";

const INITIAL_STATE = () => ({
    routes: ROUTE_LIST()
});

const DefaultLayout = ({children}) => {

    /** State */
    const [state] = useState(INITIAL_STATE());

    return (
        <>
            <div className={Classes.container}>
                <header className={Classes.navbar}>
                    <div>
                        <h1>Post Feed</h1>
                    </div>
                    <div className={Classes.navbarRoutesBox}>
                        {
                            state.routes.map(({path, name}) => (
                                <NavLink to={path}
                                         key={name}
                                         children={name}
                                         className={({isActive}) => isActive ? Classes.navBarRouteActive : Classes.navBarRoute}/>
                            ))
                        }
                    </div>
                </header>
                <main className={Classes.childContainer}>
                    {children}
                </main>
            </div>
        </>
    );
};

export default DefaultLayout;