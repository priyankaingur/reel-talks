import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import showMoreIcon from '../images/showmoreIcon.png'; // Adjust the import

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

const GenreSelection: React.FC<{ onNext: (selectedGenres: string[]) => void }> = ({ onNext }) => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
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
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <ProgressBar stages={5} currentStage={3} />
            <h2 className="tw-[896px] h-[38px] ext-2xl font-bold mb-4 text-center"
                style={{ color: 'var(--high-emphasis)', fontSize: '28px' }}>
                Select your top 5 genres for movies and TV
            </h2>
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
                {visibleGenres.map(({ name, emoji }) => (
                    <button
                        key={name}
                        className={`flex items-center justify-between p-2 border rounded-md w-[256px] h-[48px] hover:bg-gray-200 focus:outline-none`}
                        onClick={() => toggleGenre(name)}
                        style={{
                            backgroundColor: selectedGenres.includes(name) ? 'var(--primary-color)' : 'white',
                            color: '#222222',
                            fontFamily: 'Avenir Next',
                            fontSize: '14px',
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
                            className="form-checkbox h-4 w-4 rounded"
                            aria-labelledby={`checkbox-${name}`}
                        />
                    </button>
                ))}
            </div>
            {!showMore && genres.length > 20 && (
                <button className="mt-2 flex items-center text-white" onClick={toggleShowMore}>
                    <img src={showMoreIcon.src} alt="Show More Icon" className="w-4 h-4 mr-2" />
                    Show More
                </button>
            )}
            <div className="flex justify-center mt-4">
                <button
                    className="p-2 border border-white rounded text-white mr-4 bg-transparent hover:bg-gray-800"
                    onClick={() => console.log('Back button clicked')}
                    style={{ width: '256px', height: '48px' }}
                >
                    Back
                </button>
                <button
                    className={`p-2 rounded ${selectedGenres.length > 0 ? 'text-black' : 'text-white'}`}
                    onClick={() => onNext(selectedGenres)}
                    disabled={selectedGenres.length === 0}
                    style={{
                        width: '256px',
                        height: '48px',
                        background: selectedGenres.length > 0 ? 'var(--primary-color)' : 'var(--gray)'
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default GenreSelection;
