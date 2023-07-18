import { useEffect, useState } from "react"
import { sendRequest } from "../../services/sendRequest"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "../../components/Header";
import { MainPage } from "./components/MainPage";
import { CountriesPage } from "./components/CountriesPage";

import "./style.sass"

export const RestCountriesPage = () => {

    const [response, setResponse] = useState([]);

    useEffect(() => sendRequest(setResponse), []);

    let router = createBrowserRouter([
        {
            path: "/main",
            element: <MainPage />
        },

        {
            path: "/countries",
            element: <CountriesPage countryList={response} />
        }
    ])

    return (
        <>
            <Header />

            <RouterProvider router={router} />

        </>
    )
}