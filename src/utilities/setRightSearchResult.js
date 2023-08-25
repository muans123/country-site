export const setRightSearchResult = (countryList, searchResult) => {

    let countryListStartsWith = countryList?.filter(
        (country) => {
            let nameWords = country?.params?.name?.official?.toLowerCase()?.split(" ");
            for (let word of nameWords) {
                if (word.startsWith(searchResult?.toLowerCase())) return true;
            }
            return false;
        }
    )
    let countryListIcludes = countryList?.filter(
        (country) => country?.params?.name?.official?.toLowerCase()?.includes(searchResult?.toLowerCase())
    )
    let countryListCapitalStartsWith = countryList?.filter(
        (country) => {
            if (country?.params?.capital) {
                if (country.params.capital[0].toLowerCase()?.startsWith(searchResult?.toLowerCase())) return true
            }
            else return false

        }
    )

    return [... new Set([...countryListStartsWith, ...countryListCapitalStartsWith, ...countryListIcludes])];
}