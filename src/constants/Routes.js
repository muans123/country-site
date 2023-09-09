export const Routes = {
    Home: "/country-site/",
    Countries: {
        Categories: "/country-site/countries/categories",
        CurrentCategory(currentCategory){
            return  `/country-site/countries/${currentCategory}`
        }

    },
    AboutUs: "/country-site/about_us",
    Contacts: "/country-site/contacts",

    CurrentCountry(currentCountryID) {
        return `/country-site/${(currentCountryID)}`
    }

}