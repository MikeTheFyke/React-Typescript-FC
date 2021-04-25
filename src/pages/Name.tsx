import React from 'react';

interface Props {
    count?: number;
};


export const Name: React.FC<Props> = ({ count }) =>{

    return (
        <div>
            <h1>My Name</h1>
        </div>
    );
};