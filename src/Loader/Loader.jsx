import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-transparent">
                <span className="loading loading-spinner text-error"></span>
            </div>

        </div>
    );
};

export default Loader;