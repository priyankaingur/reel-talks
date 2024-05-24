import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import showMoreIcon from '../images/showmore.png';
import SearchBar from "./SearchBar";
import SearchTitle from "./SearchTitle";

interface Genre {
    name: string;
    emoji: string;
}

const genres: Genre[] = [
    { name: "Action", emoji: "🔫" },
    { name: "Adventure", emoji: "🪂" },
    { name: "Adult", emoji: "🔞" },
    { name: "Animation", emoji: "🖍" },
    { name: "Biography", emoji: "📚" },
    { name: "Bollywood", emoji: "🇮🇳" },
    { name: "Comedy", emoji: "😂" },
    { name: "Crime", emoji: "🕵️‍" },
    { name: "Disaster", emoji: "☄️" },
    { name: "Documentary", emoji: "🎥" },
    { name: "Drama", emoji: "🎭" },
    { name: "Family", emoji: "👪" },
    { name: "Fantasy", emoji: "🦄" },
    { name: "Film-Noir", emoji: "🎞" },
    { name: "History", emoji: "📜" },
    { name: "Horror", emoji: "🧟" },
    { name: "Game-Show", emoji: "🎲" },
    { name: "Independent", emoji: "📢" },
    { name: "International", emoji: "🌎" },
    { name: "Music", emoji: "🎧" },
    { name: "Musical", emoji: "🎶" },
    { name: "Mystery", emoji: "🔎" },
    { name: "News", emoji: "📰" },
    { name: "Reality-TV", emoji: "📺" },
    { name: "Romance", emoji: "❤️" },
    { name: "Rom-Com", emoji: "💏" },
    { name: "Sci-Fi", emoji: "👽" },
    { name: "Talk-Show", emoji: "🗣" },
    { name: "Short", emoji: "⏳" },
    { name: "Sport", emoji: "🏈" },
    { name: "Thriller", emoji: "😱" },
    { name: "War", emoji: "⚔️" },
    { name: "Western", emoji: "🤠" },
];

export const GenreSelection: React.FC<{ onNext: (selectedGenres: string[]) => void }> = ({ onNext }) => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [showMore, setShowMore] = useState<boolean>(false);

    const toggleGenre = (genre: string) => {
        setSelectedGenres(prev =>
            prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
        );
    };

    const toggleShowMore = () => {
        setShowMore(true);
    };

    const visibleGenres = showMore ? genres : genres.slice(0, 20);

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <div
                className="w-full max-w-3xl flex flex-col items-center justify-center">
                <ProgressBar stages={5} currentStage={3}/>
                <SearchTitle
                    title="Select your top 5 genres for movies and TV"/>
                <div
                    className="w-full flex justify-center mb-8"> {/* Center the search bar horizontally and add margin bottom */}
                    <SearchBar/>
                </div>
            </div>


            <div className="grid grid-cols-5 gap-10" style={{marginTop: showMore ? '240px' : '0px'}}>
                {visibleGenres.map(({name, emoji}) => (
                    <div>
                        <button
                            key={name}
                            className={`flex items-center justify-between p-2 text-black border rounded-md w-[225px] h-[55px] hover:bg-gray-200 focus:outline-none`}
                            onClick={() => toggleGenre(name)}
                            style={{
                                backgroundColor: selectedGenres.includes(name) ? 'var(--primary-color)' : 'white',
                                fontSize: '28px',
                                fontWeight: '600'
                            }}
                        >
                            <div className="flex items-center">
                                <span className="text-2xl mr-2">{emoji}</span>
                                <span className="text-base">{name}</span>
                            </div>
                            <input
                                type="checkbox"
                                checked={selectedGenres.includes(name)}
                                onChange={() => toggleGenre(name)}
                                className="hidden"
                                aria-labelledby={`checkbox-${name}`}
                            />
                            <span
                                className={`custom-checkbox ${selectedGenres.includes(name) ? 'checked' : ''}`}></span>

                        </button>
                    </div>
                ))}
            </div>
            {!showMore && genres.length > 20 && (
                <button className="mt-4 flex items-center text-white mb-4"
                        onClick={toggleShowMore}>
                    Show More
                    <img src={showMoreIcon.src} alt="Show More Icon"
                         className="w-4 h-4 mr-2"/>
                </button>
            )}
            <div className="flex justify-center mt-4">
                <button
                    className="p-2 border border-white rounded text-white mr-4 bg-transparent hover:bg-gray-800"
                    onClick={() => console.log('Back button clicked')}
                    style={{width: '256px', height: '48px'}}
                >
                    Back
                </button>
                <button
                    className={`p-2 rounded ${selectedGenres.length >= 3 ? 'text-black' : 'text-white'}`}
                    onClick={() => onNext(selectedGenres)}
                    disabled={selectedGenres.length < 3}
                    style={{
                        width: '256px',
                        height: '48px',
                        background: selectedGenres.length >= 3 ? 'var(--primary-color)' : 'var(--gray)',
                        opacity: selectedGenres.length < 3 ? '38%' : '100%'
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default GenreSelection;
