import { Link } from "react-router-dom";

import { Routes } from "../constants/Routes";

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
                        <Link to={Routes.CurrentCountry(border)}>
                            {
                                currentBorderCountry?.params?.name?.official
                            }
                        </Link>
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