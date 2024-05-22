import { useState } from 'react';

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
        <div className="p-6 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Select your top 5 genres for movies and TV</h2>
            <div className="flex flex-row mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="🔍Search"
                    className="w-56 h-544 p-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
                />
            </div>
            <div className="grid grid-cols-5 gap-4">
                {genres.map(({name, emoji}) => (
                    <button
                        key={name}
                        className={`flex items-center justify-between p-2 border rounded-md w-40 h-12 bg-${selectedGenres.includes(name) ? 'orange-500' : 'white'} hover:bg-gray-200 focus:outline-none`}
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
            <button
                className="mt-4 p-2 bg-orange-500 rounded text-white"
                onClick={() => onNext(selectedGenres)}
            >
                Next
            </button>
        </div>
    );
};

export default GenreSelection;
