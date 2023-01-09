import {ReactQuery, ReduxSagas, RTK} from "../Components";

export const ROUTE_LIST = () => [
    {
        name: "RTK",
        element: RTK,
        path: "/rtk"
    },
    {
        name: "Redux Saga",
        element: ReduxSagas,
        path: "/redux-saga"
    },
    {
        name: "React Query",
        element: ReactQuery,
        path: "/react-query"
    }
];