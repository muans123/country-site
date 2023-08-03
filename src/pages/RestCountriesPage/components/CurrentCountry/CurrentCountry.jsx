import { parseCurrenciesToString } from "../../../../utilities/parseCurrenciesToString"
import { parseArrayToString } from "../../../../utilities/parseArrayToString"
import { parseObjectToString } from "../../../../utilities/parseObjectToString"
import { useContext } from "react"
import { useParams } from "react-router"
import { RestCountriesContext } from "../../RestCountriesPage"

import './style.sass'

export const CurrentCountry = () => {

    let { currentCountryParam } = useParams();

    let countryList = useContext(RestCountriesContext)

    let currentCountry = countryList.find(country => country?.id === currentCountryParam)?.params;

    return (
        <div className='current-country'>
            <div className='current-country__name'>
                {currentCountry?.name?.official}
            </div>
            <div className="sides">
                <div className="left-side">
                    <div className="country__png">
                        <div className="country__flag">
                            <img src={currentCountry?.flags?.png}></img>
                        </div>
                        <div className="country__coatOfArms">
                            <img src={currentCountry?.coatOfArms?.png}></img>
                        </div>
                    </div>
                    <div className="country__info">
                        <div>
                            {currentCountry?.capital?.length > 0 && "Capital: " + currentCountry?.capital[0]}
                        </div>
                        <div>
                            Languages: {currentCountry?.languages && parseObjectToString(currentCountry?.languages)}
                        </div>
                        <div>
                            Population: {currentCountry?.population} <span>человек</span>
                        </div>
                        <div>
                            Area: {currentCountry?.area} <span>км²</span>
                        </div>
                        <div>
                            Borders : {currentCountry?.borders && parseArrayToString(currentCountry?.borders)}
                        </div>
                        <div>
                            Continents : {currentCountry?.continents}
                        </div>
                        <div>
                            Subregion: {currentCountry?.subregion}
                        </div>
                        <div>
                            Car-side : {currentCountry?.car.side}
                        </div>
                        <div>
                            Currencies : {currentCountry?.currencies && parseCurrenciesToString(currentCountry?.currencies)}
                        </div>
                        <div>
                            Timezones: {parseArrayToString(currentCountry?.timezones)}
                        </div>
                        <div>
                            Start of week : {currentCountry?.startOfWeek}
                        </div>
                        <div>
                            Status : {currentCountry?.status}
                        </div>
                        <div>
                            Independence : {currentCountry?.independent ? "independent" : "dependent"}
                        </div>
                        <div>
                            Landlocked : {currentCountry?.landlocked ? "Don`t have " : "have "} sea outlet
                        </div>
                        <div>
                            UN member : {currentCountry?.unMember ? "Yes" : "No"}
                        </div>

                    </div>
                </div>
                <div className="right-side">

                </div>
            </div>
        </div>
    )
}