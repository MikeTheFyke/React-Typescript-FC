import React from 'react';

interface Props {
    isShowing?: boolean;
};


export const Name: React.FC<Props> = () =>{
    const isShowing  = React.useState(false);

    return (
        <div>
             {{isShowing : true && <h1 >My Name</h1>}}
        </div>
    );
};