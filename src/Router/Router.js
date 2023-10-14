import { Navigate, createBrowserRouter } from "react-router-dom";

import { MainPage } from "../pages/RestCountriesPage/components/MainPage";
import { CountriesPage } from "../pages/RestCountriesPage/components/CountriesPage";
import { CategoriesPage } from "../pages/RestCountriesPage/components/CountriesPage/components/CategoriesPage";
import { CountryList } from "../pages/RestCountriesPage/components/CountriesPage/components/CountryList"
import { CurrentCountry } from "../pages/RestCountriesPage/components/CurrentCountry"
import { RestCountriesPage } from '../pages/RestCountriesPage';
import { AboutUs } from "../pages/RestCountriesPage/components/AboutUs"

export const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to={"./country-site/"} />
  }
  ,
  {
    path: "country-site/",
    element: <RestCountriesPage />,
    children:
      [
        {
          path: "",
          element: <MainPage />
        },

        {
          path: "countries",
          element: <CountriesPage />,
          children: [
            {
              path: "categories",
              element: <CategoriesPage />,
            },
            {
              path: ":categoryParam",
              element: <CountryList />,
            }
          ]
        },
        {
          path: "about_us",
          element: <AboutUs />
        },
        {
          path: ":currentCountryParam",
          element: <CurrentCountry />
        }
      ]
  }])