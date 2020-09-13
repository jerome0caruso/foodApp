import React from 'react';
import Pic from '../image/testpicfood.jpg';
import './PictureComponent.css';

function Picture() {
    return (
        <div className="recipe-pic">
            <img src={Pic} alt="food" />
        </div>
    );
}

export default Picture;

