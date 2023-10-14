import { useContext, useState } from "react"
import { useParams } from "react-router"
import { RestCountriesContext } from "../../../../RestCountriesPage"

import { setRightSearchResult } from "../../../../../../utilities/setRightSearchResult"

import { Country } from "./components/Country"
import { Search } from "./components/Search"

import "./style.sass"



export const CountryList = () => {

    let { categoryParam } = useParams();
    const [searchResult, setSearchResult] = useState("");
    let countryList = useContext(RestCountriesContext)

    console.log(countryList)

    if (categoryParam !== "All") {
        countryList = countryList?.filter(country => country?.params?.continents[0] === categoryParam)
    }

    let resultCountryList = setRightSearchResult(countryList, searchResult)

    return (
        <div className="country-list__element">
            <Search searchResult={searchResult} setSearchResult={setSearchResult} />
            <div className="country-list">

                {resultCountryList && resultCountryList?.map(
                    country => <Country key={country.id} currentCountryProps={country} />
                )}
            </div>
        </div>
    )
}