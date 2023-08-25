import "./style.sass"

export const Search = ({ searchResult, setSearchResult }) => {
    return (
        <div className="search">
            <input
                placeholder="Введите название страны\столицы"
                value={searchResult}
                onChange={(event) => setSearchResult(event?.target?.value)}
            ></input>
        </div>
    )
}