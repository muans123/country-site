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

                </div>
                <div className="right-side">

                </div>
            </div>
        </div>
    )
}