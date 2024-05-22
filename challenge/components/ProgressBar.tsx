import React from 'react';

interface ProgressBarProps {
    stages: number;
    currentStage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ stages, currentStage }) => {
    return (
        <div className="flex items-center justify-center mb-6">
            {Array.from({ length: stages }, (_, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`w-6 h-6 rounded-full ${index < currentStage ? 'bg-orange-500' : 'bg-gray-500'}`}
                    ></div>
                    {index < stages - 1 && (
                        <div
                            className={`flex-1 h-1 mx-2 ${index < currentStage - 1 ? 'bg-orange-500' : 'bg-gray-500'}`}
                            style={{ width: '30px' }}
                        ></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProgressBar;
