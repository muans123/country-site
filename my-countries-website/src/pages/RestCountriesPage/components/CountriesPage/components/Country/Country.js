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
        </div>
    )
}