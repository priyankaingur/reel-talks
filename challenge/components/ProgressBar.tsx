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
                            className={`relative w-6 h-6 rounded-full flex items-center justify-center ${index < currentStage ? 'bg-orange-500' : 'bg-gray-500'}`}
                            style={{backgroundColor: index < currentStage? 'var(--primary-color)' : 'var(--gray)'}}
                            >
                        {index === currentStage - 1 && ( // Render small white dot inside the orange dot for current stage
                            <div className="w-3 h-3 rounded-full bg-white"></div>
                            )}
                            </div>
                    {index < stages - 1 && (
                        <div
                            className={`flex-1 h-1 mx-0`}
                            style={{backgroundColor: index < currentStage - 1 ? 'var(--primary-color)' : 'var(--gray)', width: '30px'}}
                        ></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProgressBar;
