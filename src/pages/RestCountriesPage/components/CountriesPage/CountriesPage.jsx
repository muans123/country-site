import { Outlet } from "react-router";

import "./style.sass"

export const CountriesPage = () => {

    return (
        <div className="countries-page">
            <Outlet />
        </div>
    )
}