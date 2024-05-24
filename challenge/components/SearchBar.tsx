import React, {useState} from 'react';
import searchIcon from "../images/search.png";



const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <div
            className="search-bar flex items-center justify-center mb-8 relative">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-[544px] h-[56px] p-2 pl-10 rounded-md bg-gray-800 focus:outline-none text-white"
                style={{
                    opacity: 'var(--1st-surface)',
                    color: "white",
                    backgroundImage: `url(${searchIcon.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '10px center',
                    backgroundSize: '20px 20px'
                }}
            />
        </div>
    );
};

export default SearchBar;
