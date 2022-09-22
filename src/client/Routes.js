import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage, {loadData} from "./pages/UsersListPage";
import PageNotFound from "./pages/PageNotFound";
import AdminsListPage from "./pages/AdminsListPage.js";

export default [

    {
        ...App,
        routes: [
            {   ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users',
                 
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            
            {
                ...PageNotFound,
                path:''
            }
        ]
    }
];

