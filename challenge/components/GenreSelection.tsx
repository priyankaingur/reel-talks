import { useState } from 'react';

const genres = [
    "Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"
];

interface GenreSelectionProps {
    onNext: (selectedGenres: string[]) => void;
}

const GenreSelection: React.FC<GenreSelectionProps> = ({ onNext }) => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const toggleGenre = (genre: string) => {
        setSelectedGenres((prev) =>
            prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
        );
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Select Your Favorite Genres</h2>
            <div className="grid grid-cols-3 gap-4">
                {genres.map((genre) => (
                    <button
                        key={genre}
                        className={`p-2 border rounded ${
                            selectedGenres.includes(genre) ? 'bg-custom-button text-white' : 'bg-gray-200'
                        }`}
                        onClick={() => toggleGenre(genre)}
                    >
                        {genre}
                    </button>
                ))}
            </div>
            <button
                className="mt-4 p-2 bg-custom-button text-white rounded"
                onClick={() => onNext(selectedGenres)}
            >
                Next
            </button>
        </div>
    );
};

export default GenreSelection;
