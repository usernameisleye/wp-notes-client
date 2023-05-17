import { useGlobalContext } from "../../context/GlobalContext";

const Search = () => {
    const { setSearch } = useGlobalContext();

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return ( 
        <div className="search">
            <input 
                type="text" 
                list="posts"
                placeholder="Search"
                onChange={handleSearch}
            />

            <img src="/images/search-input.png" alt="Search icon" className="icon" />
        </div>
     );
}
 
export default Search;