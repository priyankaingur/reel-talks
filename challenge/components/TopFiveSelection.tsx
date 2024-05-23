import React from 'react';
import ProgressBar from './ProgressBar';
import SearchBar from "./SearchBar";
import SearchTitle from "./SearchTitle";

interface Movie {
    name: string;
    image: string;
}

const movies: Movie[] = [
    { name: "The Shawshank Redemption (1994)", image: require("../images/shawshank.png") },
    { name: "Inception (2010)", image: require("../images/inception.png") },
];

const TopFiveMovieSelection: React.FC<{ onNext: (selectedGenres: string[]) => void }> = ({ onNext }) => {


    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <ProgressBar stages={5} currentStage={4}/>
            <SearchTitle title="Select your top 5 movies"/>

            <h2 className="max-w-[600px] text-2xl mb-4 text-center"
                style={{
                    color: 'var(--high-emphasis)',
                    fontSize: '16px',
                    overflowWrap: 'break-word'
                }}>
                Selecting your top 5 movies will enable us to suggest
                like-minded users and nearby communities for exciting watch
                parties and movie premiere gatherings.
            </h2>
            <SearchBar/>
            <h2 className="tw-[203px] h-[27px] ext-2xl mb-4"
                style={{color: 'var(--high-emphasis)', fontSize: '20px'
                }}>
                Movies you might like
            </h2>

        </div>
    );
};

export default TopFiveMovieSelection;
