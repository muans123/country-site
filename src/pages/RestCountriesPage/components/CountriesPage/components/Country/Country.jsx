import { parseObjectToString } from "../../../../../../utilities/parseObjectToString"
import { parseArrayToString } from "../../../../../../utilities/parseArrayToString"

import "./style.sass"

export const Country = ({ currentCountryProps }) => {

    let currentCountry = currentCountryProps?.params;

    return (
        <div className="country">
            <div className="country__name">
                {currentCountry?.name?.official}
            </div>
            <div className="country__flag">
                <img src={currentCountry?.flags?.png}></img>
            </div>
            <div className="country__capital">
                {currentCountry?.capital?.length > 0 && "Capital: " + currentCountry?.capital[0]}
                {/*Capital: {currentCountry?.capital?.length > 0 ? currentCountry?.capital[0] : "-"}*/}
            </div>
            <div className="country__area">
                Area: {currentCountry?.area} <span>км²</span>
            </div>
            <div className="country__languages">
                Languages: {currentCountry?.languages && parseObjectToString(currentCountry?.languages)}
            </div>
            <div className="country__population">
                Population: {currentCountry?.population} <span>человек</span>
            </div>
            <div className="country__subregion">
                Subregion: {currentCountry?.subregion}
            </div>
            <div className="country__timezones">
                Timezones: {parseArrayToString(currentCountry?.timezones)}
            </div>
        </div>
    )
}