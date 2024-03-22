import React from 'react';

const Heading = ({ text }) => {
    
      const typewriter = {
        fontSize: '13px',
        color: '#333',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        animation: 'typing-animation 8s steps(60, end)'
    };

    return (
        <h1 style={typewriter}>
            {text}
            <style>{
             `@keyframes typing-animation {
                  from { width: 0; }
                  to { width: 100%; }
                }`
            }</style>
        </h1>
    );
};

export default Heading;
