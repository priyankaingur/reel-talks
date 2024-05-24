import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import SearchBar from "./SearchBar";
import SearchTitle from "./SearchTitle";

interface Movie {
    name: string;
    image: StaticImageData;
}

// Importing images
import shawshankImage from '../images/shawshank.png';
import inceptionImage from '../images/inception.png';
import intouchablesImage from '../images/intouchables.png';
import wallEImage from '../images/walle.png';
import flippedImage from '../images/flipped.png';
import darkKnightImage from '../images/darkknight.png';
import { StaticImageData } from "next/image";

const movies: Movie[] = [
    { name: "The Shawshank Redemption (1994)", image: shawshankImage },
    { name: "Inception (2010)", image: inceptionImage },
    { name: "Intouchables (2011)", image: intouchablesImage },
    { name: "WALL·E (2008)", image: wallEImage },
    { name: "Flipped (2010)", image: flippedImage },
    { name: "The Dark Knight (2008)", image: darkKnightImage }
];

export const MovieSelection: React.FC<{ onNext: (selectedMovies: string[]) => void }> = ({ onNext }) => {
    const [selectedMovies, setSelectedMovies] = useState<string[]>([]);

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <div
                className="w-full max-w-3xl flex flex-col items-center justify-center">
                <ProgressBar stages={5} currentStage={4}/>
                <SearchTitle title="Select your top 5 movies"/>
                <div className="mb-8">
                    <h2 className="max-w-[600px] text-2xl mb-4 text-center"
                        style={{
                            color: 'var(--high-emphasis)',
                            fontSize: '20px',
                            overflowWrap: 'break-word'
                        }}>
                        Selecting your top 5 movies will enable us to suggest
                        like-minded users and nearby communities for exciting
                        watch
                        parties and movie premiere gatherings.
                    </h2>

                </div>
                <div
                    className="w-full flex justify-center mb-8"> {/* Center the search bar horizontally and add margin bottom */}
                    <SearchBar/>
                </div>
            </div>

            <div className="tw-[203px] h-[27px] text-2xl mb-8"
                 style={{color: 'var(--high-emphasis)', fontSize: '28px'}}>
                Movies you might like
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-6 gap-16">
                    {movies.map(movie => (
                        <div key={movie.name} className="text-center">
                            <img src={movie.image.src} alt={movie.name}
                                 className="w-96 h-142.45 mx-auto"/>
                            <div
                                className="w-17 h-48 text-[20px] justify-center overflow-hidden">{movie.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div></div>
            <button
                className={`p-2 rounded ${selectedMovies.length >= 3 ? 'text-black' : 'text-white'}`}
                onClick={() => onNext(selectedMovies)}
            >
                Next
            </button>
        </div>
    );
};

export default MovieSelection;
