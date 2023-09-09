import { Link } from "react-router-dom";

import { Routes } from "../../../../../../constants/Routes";

import { categories } from "../../../../../../constants/categories";

import "./style.sass"

export const CategoriesPage = () => {
    return (
        <div className="continents-list">
            <div className="continents-block__up">
                <div>
                    <Link to={Routes.Countries.CurrentCategory(categories[0][0])}>
                        <div>{categories[0][1]}</div>
                    </Link>
                </div>
                <div >
                    <Link to={Routes.Countries.CurrentCategory(categories[1][0])}>
                        <div> {categories[1][1]}</div>
                    </Link>
                </div>
                <div >
                    <Link to={Routes.Countries.CurrentCategory(categories[2][0])}>
                        <div>{categories[2][1]}</div>
                    </Link>
                </div>
            </div>
            <div className="continents-block__down">
                <div >
                    <Link to={Routes.Countries.CurrentCategory(categories[3][0])}>
                        <div> {categories[3][1]}</div>
                    </Link>
                </div>
                <div >
                    <Link to={Routes.Countries.CurrentCategory(categories[4][0])}>
                        <div> {categories[4][1]}</div>
                    </Link>
                </div>
                <div >
                    <Link to={Routes.Countries.CurrentCategory(categories[5][0])}>
                        <div> {categories[5][1]}</div>
                    </Link>
                </div>
                <div >
                    <Link to={Routes.Countries.CurrentCategory(categories[6][0])}>
                        <div> {categories[6][1]}</div>
                    </Link >
                </div>
            </div>
        </div>
    )
}