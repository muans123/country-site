import { Link } from "react-router-dom"
import { Routes } from "../../../../../../../../constants/Routes"

import { parseObjectToString } from "../../../../../../../../utilities/parseObjectToString"
import { parseArrayToString } from "../../../../../../../../utilities/parseArrayToString"

import "./style.sass"

export const Country = ({ currentCountryProps }) => {

    let currentCountry = currentCountryProps?.params;

    return (
        <div className="country">
            <div className="country__name">
                <Link to={Routes.CurrentCountry(currentCountry?.cca3)}>
                    {currentCountry?.name?.official}
                </Link>
            </div>
            <div className="country__flag">
                <img src={currentCountry?.flags?.png}></img>
            </div>
            <div className="current-country_main-info">
                <div>
                    {currentCountry?.capital?.length > 0 && "Capital: " + currentCountry?.capital[0]}
                    {/*Capital: {currentCountry?.capital?.length > 0 ? currentCountry?.capital[0] : "-"}*/}
                </div>
                <div>
                    Area: {currentCountry?.area} <span>км²</span>
                </div>
                <div >
                    Languages: {currentCountry?.languages && parseObjectToString(currentCountry?.languages)}
                </div>
                <div >
                    Population: {currentCountry?.population} <span>человек</span>
                </div>
                <div className="country__subregion">
                    Subregion: {currentCountry?.subregion}
                </div>
                <div className="country__timezones">
                    Timezones: {parseArrayToString(currentCountry?.timezones)}
                </div>
            </div>
        </div>
    )
}