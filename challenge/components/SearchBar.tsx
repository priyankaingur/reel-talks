import React, {useState} from 'react';
import searchIcon from "../images/search.png";



const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <div className="mb-4 relative justify-center">
            <img src={searchIcon.src} alt="SearchBar Icon"
                 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-[544px] h-[56px] p-2 pl-10 rounded-md  bg-gray-800 focus:outline-none"
                style={{opacity: 'var(--1st-surface)', color:"white"}}
            />

        </div>
    );
};

export default SearchBar;
