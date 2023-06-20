import "./style.css"

import { Country } from "./components/Country/Country"

export const CountriesPage = ({ countryList }) => {

    console.log(countryList);

    return (
        <div className="countries-list">
            {countryList && countryList.map(country => <Country key={country?.name?.official} currentCountry={country} />)}
        </div>
    )
}