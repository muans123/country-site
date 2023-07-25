import { createContext, useEffect, useState } from "react"
import { sendRequest } from "../../services/sendRequest"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "../../components/Header";
import { MainPage } from "./components/MainPage";
import { CountriesPage } from "./components/CountriesPage";
import { CategoriesPage } from "./components/CountriesPage/components/CategoriesPage";
import { CountryList } from "./components/CountriesPage/components/CountryList"
import { CurrentCountry } from "./components/CurrentCountry"

import "./style.sass"

export const RestCountriesContext = createContext([]);

let router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },

    {
        path: "/countries",
        element: <CountriesPage />,
        children: [
            {
                path: "categories",
                element: <CategoriesPage />,
            },
            {
                path: ":categoryParam",
                element: <CountryList />,
            }]
    },
    // {
    //     path: "/AboutUs",
    //     element: <AboutUs />
    // },
    // {
    //     path: "/Contacts",
    //     element: <Contacts />
    // },
    {

        path: ":currentCountryParam",
        element: <CurrentCountry />

    }])

export const RestCountriesPage = () => {

    const [response, setResponse] = useState([]);

    useEffect(() => sendRequest(setResponse), []);

    console.log(response)

    return (
        <>
            <Header />

            <RestCountriesContext.Provider value={response}>
                <RouterProvider router={router} />
            </RestCountriesContext.Provider>
        </>
    )
}