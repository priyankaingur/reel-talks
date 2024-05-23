import React, { useState } from 'react';
import { GenreSelection } from '../components/GenreSelection'; // Change import statement
import { MovieSelection } from '../components/MovieSelection'; // Change import statement

const Challenge = () => {
    const [step, setStep] = useState(1);
    const [genres, setGenres] = useState<string[]>([]);
    const [topMovies, setTopMovies] = useState<string[]>([]); // Change the type to string[] if it's not already

    const handleGenreNext = (selectedGenres: string[]) => {
        setGenres(selectedGenres);
        setStep(2);
    };

    const handleMoviesNext = (selectedMovies: string[]) => {
        setTopMovies(selectedMovies);
        console.log('Selected Genres:', genres);
        console.log('Selected Movies:', selectedMovies);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {step === 1 && <GenreSelection onNext={handleGenreNext} />}
            {step === 2 && <MovieSelection   onNext={handleMoviesNext}/>}
        </div>
    );
};

export default Challenge;
