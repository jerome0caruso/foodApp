import React, { useState } from 'react';
import './Stars.css';
import Heart from '@material-ui/icons/Favorite';

function Stars() {
    let [star, setStar] = useState(false);
    let [colorRed, setColorRed] = useState();
    let [colorBlack, setcolorBlack] = useState();

    function colorHeart() {
        console.log("red")
        star === false ? setStar(star = true) : setStar(star = false);
        if (star === true) {
            setColorRed('red');
        } else {
            setColorRed('rgb(105, 105, 105)');
        }
    }

    return (
        <div className="ratingsContainer">
            <div className="icon-box">
                <span className="line-one"><Heart className="heart" onClick={colorHeart} style={{ color: colorRed, fontSize: '30px' }} /></span>
                <h3>Save</h3>
            </div>
            <div className="icon-box">
                <fieldset className="rating">
                    <input type="radio" id="star5" name="rating" value="5" /><label className="full" for="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4half" name="rating" value="4.5" /><label className="half" for="star4half" title="Great - 4.5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" /><label className="full" for="star4" title="Really Good - 4 stars"></label>
                    <input type="radio" id="star3half" name="rating" value="3.5" /><label className="half" for="star3half" title="Average - 3.5 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" /><label className="full" for="star3" title="Average - 3 stars"></label>
                    <input type="radio" id="star2half" name="rating" value="2.5" /><label className="half" for="star2half" title="Sub-Average - 2.5 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" /><label className="full" for="star2" title="Needs Work - 2 stars"></label>
                    <input type="radio" id="star1half" name="rating" value="1.5" /><label className="half" for="star1half" title="Don't Try - 1.5 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" /><label className="full" for="star1" title="Horrible - 1 star"></label>
                    <input type="radio" id="starhalf" name="rating" value=".5" /><label className="half" for="starhalf" title="What? - 0.5 stars"></label>
                </fieldset>
                <h5><span className="amountOF-likes">510 likes</span></h5>
            </div>
        </div >
    )

}

export default Stars;
