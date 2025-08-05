import React from 'react';

const Welcome = () => {
    return (
        <div className="flex flex-col justify-center items-center p-6 fade-up">
            <h1 className="text-5xl font-extrabold mb-4 text-white">
                Welcome to Countdown Timers
            </h1>
            <p className="text-lg text-white max-w-xl text-center mb-8">
                Choose from a variety of customizable countdown timers to keep your meetings,
                breaks, cooking, and other activities perfectly timed and organized.
            </p>
        </div>
    );
};

export default Welcome;
