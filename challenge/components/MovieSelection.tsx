import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import SearchBar from "./SearchBar";
import SearchTitle from "./SearchTitle";

interface Movie {
    name: string;
    image: string;
}

const movies: Movie[] = [
    { name: "The Shawshank Redemption (1994)", image: require("../images/shawshank.png").default },
    { name: "Inception (2010)", image: require("../images/inception.png").default },
];

export const MovieSelection: React.FC<{ onNext: (selectedMovies: string[]) => void }> = ({ onNext }) => {
    const [selectedMovies, setSelectedMovies] = useState<string[]>([]);

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

            <div className="tw-[203px] h-[27px] text-2xl mb-4"
                 style={{color: 'var(--high-emphasis)', fontSize: '20px'}}>
                Movies you might like
            </div>

            <div className="grid grid-cols-2 gap-4">
                {movies.map((movie) => (
                    <div key={movie.name} className="text-center">
                        <img src={movie.image} alt={movie.name}
                             className="w-32 h-auto mx-auto"/>
                        <div className="text-white">{movie.name}</div>
                    </div>
                ))}
            </div>
            <button
                className={`p-2 rounded ${selectedMovies.length >= 3 ? 'text-black' : 'text-white'}`}
                onClick={() => onNext(selectedMovies)}
                // disabled={selectedGenres.length < 3}
                // style={{
                //     width: '256px',
                //     height: '48px',
                //     background: selectedGenres.length >= 3 ? 'var(--primary-color)' : 'var(--gray)',
                //     opacity: selectedGenres.length < 3 ? '38%' : '100%'
            >
                Next
            </button>
        </div>
    );
};

export default MovieSelection;