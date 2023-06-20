import { useEffect, useState } from "react"
import { sendRequest } from "../../services/sendRequest"

import { Header } from "../../components/Header";
import { MainPage } from "./components/MainPage";
import { CountriesPage } from "./components/CountriesPage";

import "./style.css"

export const RestCountriesPage = () => {

    const [response, setResponse] = useState([]);
    const [currentTab, setCurrentTab] = useState("main");

    useEffect(() => sendRequest(setResponse), [currentTab]);

    let currentTabElement;

    switch (currentTab) {
        case "main":
            currentTabElement = <MainPage />
            break;
        case "countries":
            currentTabElement = <CountriesPage countryList={response} />
            break;
        default:
            currentTabElement = <div> Пока нет ничего) </div>
    }

    return (
        <>
            <Header setCurrentTab={setCurrentTab} />
            {currentTabElement}
        </>
    )
}