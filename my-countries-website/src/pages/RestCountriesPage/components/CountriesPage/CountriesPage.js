import { categories } from "../../../../constants/categories";

import { Country } from "./components/Country/Country"

import "./style.css"

export const CountriesPage = ({ countryList }) => {

    console.log(countryList);

    return (
        <div className="continents-list">
            <div className="continents-block__up">
                <div>{categories[0][1]}</div>
                <div>{categories[1][1]}</div>
                <div>{categories[2][1]}</div>
            </div>
            <div className="continents-block__down">
                <div>{categories[3][1]}</div>
                <div>{categories[4][1]}</div>
                <div>{categories[5][1]}</div>
                <div>{categories[6][1]}</div>
            </div>
        </div>
    )
}