import { useState } from 'react';
import GenreSelection from '../components/GenreSelection';
import TopFiveSelection from '../components/TopFiveSelection';

const Onboarding = () => {
    const [step, setStep] = useState(1);
    const [genres, setGenres] = useState<string[]>([]);
    const [topMovies, setTopMovies] = useState<number[]>([]);

    const handleGenreNext = (selectedGenres: string[]) => {
        setGenres(selectedGenres);
        setStep(2);
    };

    const handleMoviesNext = (selectedMovies: number[]) => {
        setTopMovies(selectedMovies);
        // Submit data to Firebase or perform next actions
        console.log('Selected Genres:', genres);
        console.log('Selected Movies:', selectedMovies);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {step === 1 && <GenreSelection onNext={handleGenreNext} />}
            {step === 2 && <TopFiveSelection onNext={handleMoviesNext} />}
        </div>
    );
};

export default Onboarding;
