export const parseBordersToString = (bordersArray, countryList) => {

    if (bordersArray) {

        let resultArray = [];

        bordersArray.map(
            (border, index) => {
                let currentBorderCountry = countryList?.find(
                    (country) => country?.id === border
                )
                let element = index < bordersArray?.length - 1 ? ", " : ".";

                resultArray.push(
                    <span key={currentBorderCountry?.id}>
                        <a href={border}>
                            {
                                currentBorderCountry?.params?.name?.official
                            }
                        </a>
                        {element}
                    </span>
                )
            }
        )

        return resultArray;
    }
    else {
        return "-"
    }
}