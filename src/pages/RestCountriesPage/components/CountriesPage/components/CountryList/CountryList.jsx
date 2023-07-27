import { useContext } from "react"
import { useParams } from "react-router"
import { RestCountriesContext } from "../../../../RestCountriesPage"

import { Country } from "../Country"

import "./style.sass"


export const CountryList = () => {

    let { categoryParam } = useParams();

    console.log("catParam " + categoryParam)

    let countryList = useContext(RestCountriesContext)

    if (categoryParam !== "All") {
        countryList = countryList?.filter(country => country?.params?.continents[0] === categoryParam)
    }

    return (
        <div className="country-list">
            {countryList && countryList?.map(
                country => <Country currentCountryProps={country} />
            )}
        </div>
    )
}