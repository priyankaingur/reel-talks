import React, { useState } from 'react';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

interface Genre {
    name: string;
    emoji: string;
}

const genres: Genre[] = [
    { name: "Action", emoji: "🔫" },
    { name: "Adventure", emoji: "🪂" },
    { name: "Adult", emoji: "🔞" },
    { name: "Animation ", emoji: "🖍" },
    { name: "Biography ", emoji: "📚" },
    { name: "Bollywood ", emoji: "🇮🇳" },
    { name: "Comedy", emoji: "😂" },
    { name: "Crime", emoji: "🕵️‍" },
    { name: "Disaster", emoji: "☄️" },
    { name: "Documentary", emoji: "🎥" },
    { name: "Drama ", emoji: "🎭" },
    { name: "Family", emoji: "👪" },
    { name: "Fantasy", emoji: "🦄" },
    { name: "Film-Noir ", emoji: "🎞" },
    { name: "History", emoji: "📜" },
    { name: "Horror ", emoji: "🧟" },
    { name: "Game-Show  ", emoji: "🎲" },
    { name: "Independent", emoji: "📢" },
    { name: "International", emoji: "🌎" },
    { name: "Music ", emoji: "🎧" }
];

const GenreSelection: React.FC<{ onNext: (selectedGenres: string[]) => void }> = ({ onNext }) => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const toggleGenre = (genre: string) => {
        setSelectedGenres(prev =>
            prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
        );
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <ProgressBar stages={5} currentStage={3} /> {/* Add the progress bar */}
            <h2 className="text-2xl font-bold mb-4 text-center">Select your top 5 genres for movies and TV</h2>
            <div className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="🔍 Search genres..."
                    className="w-[544px] h-[56px] p-2 rounded-md bg-gray-800 text-white focus:outline-none"
                />
            </div>
            <div className="grid grid-cols-5 gap-4">
                {genres.map(({ name, emoji }) => (
                    <button
                        key={name}
                        className={`flex items-center justify-between p-2 border rounded-md w-[256px] h-[48px] ${selectedGenres.includes(name) ? 'bg-orange-500' : 'bg-white'} hover:bg-gray-200 focus:outline-none`}
                        onClick={() => toggleGenre(name)}
                        style={{ color: '#222222', fontFamily: 'Avenir Next', fontSize: '14px', fontWeight: '600' }}
                    >
                        <div className="flex items-center">
                            <span className="text-2xl mr-2">{emoji}</span>
                            <span className="text-base">{name}</span>
                        </div>
                        <input
                            type="checkbox"
                            checked={selectedGenres.includes(name)}
                            onChange={() => toggleGenre(name)}
                            className="form-checkbox h-5 w-5 text-orange-500 rounded"
                            aria-labelledby={`checkbox-${name}`}
                        />
                    </button>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    className="p-2 border border-white rounded text-white mr-4 bg-transparent hover:bg-gray-800"
                    onClick={() => console.log('Back button clicked')}
                    style={{ width: '256px', height: '48px' }}
                >
                    Back
                </button>
                <button
                    className={`p-2 rounded ${selectedGenres.length > 0 ? 'text-black bg-orange-500' : 'text-white bg-gray-600'}`}
                    onClick={() => onNext(selectedGenres)}
                    disabled={selectedGenres.length === 0}
                    style={{ width: '256px', height: '48px' }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default GenreSelection;
