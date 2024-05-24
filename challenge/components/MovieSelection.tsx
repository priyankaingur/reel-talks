import React  from 'react';
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

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white relative">
            <ProgressBar stages={5} currentStage={4} />
            <div className="w-full max-w-3xl flex flex-col items-center justify-center">
                <SearchTitle title="Select your top 5 movies" />
                <div className="mt-60 mb-8"> {/* Adjusted margin top and
                 bottom */}
                    <h2 className="max-w-[680px] text-center"
                        style={{
                            color: 'var(--high-emphasis)',
                            fontSize: '18px',
                            overflowWrap: 'break-word'
                        }}>
                        Selecting your top 5 movies will enable us to suggest
                        like-minded users and nearby communities for exciting
                        watch parties and movie premiere gatherings.
                    </h2>
                </div>
                <div className="w-full flex justify-center mb-8">
                    <SearchBar />
                </div>
            </div>
            <div className="mt-8 mb-20">
                <div className="text-2xl mb-8"
                     style={{ color: 'var(--high-emphasis)', fontSize: '28px' }}>
                    Movies you might like
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-6 gap-16">
                        {movies.map(movie => (
                            <div key={movie.name} className="text-center">
                                <img src={movie.image.src} alt={movie.name}
                                     className="w-76 h-130 mx-auto"/>
                                <div className="w-17 h-48 text-[20px] justify-center overflow-hidden font-thin">{movie.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center mt-12 mb-20">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl mb-4 text-center"
                            style={{
                                color: 'var(--high-emphasis)',
                                fontSize: '28px'
                            }}>
                            Your top 5 selections
                        </h2>
                        <div className="flex justify-items-start">
                            {[...Array(5)].map((_, index) => (
                                <div key={index}
                                     className="w-20 h-36 border-dashed border-gray-700 border-4 mx-2"></div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-items">
                        <button
                            className="p-2 border border-white rounded text-white mb-4 bg-transparent hover:bg-gray-800"
                            onClick={() => console.log('Skip button clicked')}
                            style={{width: '256px', height: '48px'}}
                        >
                            Skip
                        </button>
                        <button
                            className="p-2 border border-white rounded text-white bg-transparent hover:bg-gray-800"
                            onClick={() => console.log('Back button clicked')}
                            style={{width: '256px', height: '48px'}}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieSelection;
