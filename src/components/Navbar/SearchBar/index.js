import React, { useState } from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState(false);
    const submitSearch = (id, e) => {
        e.preventDefault();
        if(e.target[0].value.length < 1) setSearch(false);
        console.log(id, e.target[0].value);
    }

    const openSearch = () => {
        setSearch(true);
    }

    const closeSearch = (e) => {
        if(document.getElementById("searchOpenend").value.length < 1) setSearch(false);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className="search">
            <form onSubmit={submitSearch.bind(this, 1)}>
                <input id="searchOpenend" type="text" className={searchClass} placeholder="Search" onBlur={closeSearch}/>
                <img onClick={openSearch} className="searchIcon" src={require('../../../assets/icons/search.png')} alt="Search" />
            </form>
        </div>
    );
};

export default SearchBar;