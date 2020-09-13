import React from 'react';
import './MadeByOthers.css';
import Picture from '../image/testpicfood.jpg';



function MadeByOthers() {
    return (
        <div className="small-photo">
            <img src={Picture} alt="small food" />
            <h4>Recipe Variation</h4>
            <h6>By: Billy Rothschild</h6>
            <p>This is a another version of this great recipe!  Try this instead....,This is a another version of this great recipe!  Try this instead.... </p>
        </div >
    );
}

export default MadeByOthers;