import "./style.css"

export const Country = ({ currentCountry }) => {
    return (
        <div className="country">
            <div className="country__name">
                {currentCountry?.name?.official}
            </div>
            <div className="country__flag">
                <img src={currentCountry?.flags?.png}></img>
            </div>
            <div className="country__capital">
                {currentCountry?.capital?.length > 0 && "Capital: " + currentCountry?.capital[0]}
                {/*Capital: {currentCountry?.capital?.length > 0 ? currentCountry?.capital[0] : "-"}*/}
            </div>
            <div className="country__area">
                {currentCountry?.area?.official}
            </div>
            <div className="country__languages">
                {currentCountry?.languages?.official}
            </div>
            <div className="country__population">
                {currentCountry?.population?.official}
            </div>
            <div className="country__subregion">
                {currentCountry?.subregion?.official}
            </div>
            <div className="country__timezones">
                {currentCountry?.timezones?.official}
            </div>
        </div>
    )
}