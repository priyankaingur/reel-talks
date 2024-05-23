import React from 'react';

interface SearchTitleProps {
    title: string;
}

const SearchTitle: React.FC<SearchTitleProps> = ({ title }) => {

    return (
        <h2 className="tw-[896px] h-[38px] ext-2xl mb-4 text-center"
            style={{color: 'var(--high-emphasis)', fontSize: '28px'}}>
            {title}
        </h2>
    );
};

export default SearchTitle;
