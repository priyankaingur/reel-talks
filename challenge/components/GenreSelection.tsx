import { useState } from 'react';

interface Genre {
    name: string;
    emoji: string;
}

const genres: Genre[] = [
    { name: "Action", emoji: "🔥" },
    { name: "Comedy", emoji: "😂" },
    { name: "Drama", emoji: "🎭" },
    // Add other genres as needed
];

const GenreSelection: React.FC<{ onNext: (selectedGenres: string[]) => void }> = ({ onNext }) => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const toggleGenre = (genre: string) => {
        setSelectedGenres(prev =>
            prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
        );
    };

    return (
        <div className="p-6 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold mb-4">Select Your Favorite Genres</h2>
            <div className="grid grid-cols-5 gap-4">
                {genres.map(({ name, emoji }) => (
                    <button
                        key={name}
                        className={`flex items-center justify-between p-2 border rounded w-40 h-12 bg-${selectedGenres.includes(name) ? 'orange-500' : 'white'} hover:bg-gray-200 focus:outline-none`}
                        onClick={() => toggleGenre(name)}
                        style={{ color: '#222222', fontFamily: 'Avenir Next' }}
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
