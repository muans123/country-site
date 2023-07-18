import { useState } from "react";
import { categories } from "../../../../constants/categories";
import { CurrentPage } from "../CurrentPage"

import "./style.sass"

export const CountriesPage = ({ countryList }) => {

    const [currentContinent, setCurrentContinent] = useState("list")

    console.log(countryList);


    return (
        <>
            {currentContinent === "list" ? <div className="continents-list">
                <div className="continents-block__up">
                    <div onClick={() => setCurrentContinent(categories[0][0])}>{categories[0][1]}</div>
                    <div onClick={() => setCurrentContinent(categories[1][0])}>{categories[1][1]}</div>
                    <div onClick={() => setCurrentContinent(categories[2][0])}>{categories[2][1]}</div>
                </div>
                <div className="continents-block__down">
                    <div onClick={() => setCurrentContinent(categories[3][0])}>{categories[3][1]}</div>
                    <div onClick={() => setCurrentContinent(categories[4][0])}>{categories[4][1]}</div>
                    <div onClick={() => setCurrentContinent(categories[5][0])}>{categories[5][1]}</div>
                    <div onClick={() => setCurrentContinent(categories[6][0])}>{categories[6][1]}</div>
                </div>
            </div> :
                currentContinent === "All" ? <CurrentPage currentRegionCountries={countryList} /> :
                    <CurrentPage currentRegionCountries={countryList?.filter(country => country?.params?.continents[0] === currentContinent)} />}

        </>
    )
}