import { createContext, useEffect, useState } from "react"
import { sendRequest } from "../../services/sendRequest"
import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

import "./style.sass"

export const RestCountriesContext = createContext([]);

export const RestCountriesPage = () => {

    const [response, setResponse] = useState([]);

    useEffect(() => sendRequest(setResponse), []);

    console.log(response)

    return (
        <div className="rest-countries-page">
            <Header />

            <RestCountriesContext.Provider value={response}>
                <Outlet />
            </RestCountriesContext.Provider>
        </div>
    )
}