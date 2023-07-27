import { categories } from "../../../../../../constants/categories";

import "./style.sass"

export const CategoriesPage = () => {
    return (
        <div className="continents-list">
            <div className="continents-block__up">
                <div>
                    <a href={`/countries/${categories[0][0]}`}>
                        <div>{categories[0][1]}</div>
                    </a>
                </div>
                <div >
                    <a href={`/countries/${categories[1][0]}`}>
                        <div> {categories[1][1]}</div>
                    </a>
                </div>
                <div >
                    <a href={`/countries/${categories[2][0]}`}>
                        <div>{categories[2][1]}</div>
                    </a>
                </div>
            </div>
            <div className="continents-block__down">
                <div >
                    <a href={`/countries/${categories[3][0]}`}>
                        <div> {categories[3][1]}</div>
                    </a>
                </div>
                <div >
                    <a href={`/countries/${categories[4][0]}`}>
                        <div> {categories[4][1]}</div>
                    </a>
                </div>
                <div >
                    <a href={`/countries/${categories[5][0]}`}>
                        <div> {categories[5][1]}</div>
                    </a>
                </div>
                <div >
                    <a href={`/countries/${categories[6][0]}`}>
                        <div> {categories[6][1]}</div>
                    </a >
                </div>
            </div>
        </div>
    )
}