import {Country} from "../CountriesPage/components/Country"
 
import './CurrentPage.css'

export const CurrentPage = ({currentRegionCountries}) => {
    console.log(currentRegionCountries)
    return (
        <div className='current-page'>
            {currentRegionCountries.map((country) => <Country currentCountry={country}></Country>)}
        </div>
    )
}