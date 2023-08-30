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
                            Capital: <span>{currentCountry?.capital?.length > 0 && currentCountry?.capital[0]}</span>
                        </div>
                        <div>
                            Languages: <span>{currentCountry?.languages && parseObjectToString(currentCountry?.languages)}</span>
                        </div>
                        <div>
                            Population: <span>{currentCountry?.population} человек</span>
                        </div>
                        <div>
                            Area: <span>{currentCountry?.area} км² </span>
                        </div>
                        <div>
                            Borders : <span>{currentCountry?.borders && parseArrayToString(currentCountry?.borders)}</span>
                        </div>
                        <div>
                            Continents : <span>{currentCountry?.continents}</span>
                        </div>
                        <div>
                            Subregion: <span>{currentCountry?.subregion}</span>
                        </div>
                        <div>
                            Car-side : <span>{currentCountry?.car.side}</span>
                        </div>
                        <div>
                            Currencies : <span>{currentCountry?.currencies && parseCurrenciesToString(currentCountry?.currencies)}</span>
                        </div>
                        <div>
                            Timezones: <span>{parseArrayToString(currentCountry?.timezones)}</span>
                        </div>
                        <div>
                            Start of week : <span>{currentCountry?.startOfWeek}</span>
                        </div>
                        <div>
                            Status : <span>{currentCountry?.status}</span>
                        </div>
                        <div>
                            Independence : <span>{currentCountry?.independent ? "independent" : "dependent"}</span>
                        </div>
                        <div>
                            Landlocked : <span>{currentCountry?.landlocked ? "Don`t have " : "have "} sea outlet</span>
                        </div>
                        <div>
                            UN member : <span>{currentCountry?.unMember ? "Yes" : "No"}</span>
                        </div>

                    </div>
                </div>
                <div className="right-side">

                </div>
            </div>
        </div>
    )
}