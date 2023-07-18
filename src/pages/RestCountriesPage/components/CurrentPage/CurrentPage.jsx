import {Country} from "../CountriesPage/components/Country"
 
import './CurrentPage.sass'

export const CurrentPage = ({currentRegionCountries}) => {
    console.log(currentRegionCountries)
    return (
        <div className='current-page'>
            {currentRegionCountries?.map((country) => <Country currentCountryProps={country}></Country>)}
        </div>
    )
}