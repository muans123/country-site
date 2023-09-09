import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainPage } from "../pages/RestCountriesPage/components/MainPage";
import { CountriesPage } from "../pages/RestCountriesPage/components/CountriesPage";
import { CategoriesPage } from "../pages/RestCountriesPage/components/CountriesPage/components/CategoriesPage";
import { CountryList } from "../pages/RestCountriesPage/components/CountriesPage/components/CountryList"
import { CurrentCountry } from "../pages/RestCountriesPage/components/CurrentCountry"
import { RestCountriesPage } from '../pages/RestCountriesPage';

import './App.sass';

let router = createBrowserRouter([{
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
          }]
      },
      // {
      //     path: "about_us",
      //     element: <AboutUs />
      // },
      // {
      //     path: "contacts",
      //     element: <Contacts />
      // },
      {

        path: ":currentCountryParam",
        element: <CurrentCountry />

      }
    ]
}])

export function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}