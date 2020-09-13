import React from 'react';
import './YourPantry.css';

function YourPantry() {
    return (

        <div className="pantry-container">
            <div className="pantry-edit">
                <h2>Pantry</h2>
                <button className="pantry-btn-edit">Edit</button>< br />
            </div>
            <input className="input-field" type="text"></input>
            <button className="pantry-btn">Quick Filter</button>< br />
            <input type="checkbox" name="pan-first" id='first' value="2 lbs Bowtie Pasta Noodles" />
            <label for='first'><span className="pantry-text"> 2 lbs Bowtie Pasta Noodles </span> </label><br />
            <input type="checkbox" name="pan-second" id='second' value="3 lbs Cherry Tomatoes" />
            <label for='second'><span className="pantry-text"> 3 lbs Cherry Tomatoes </span> </label><br />
            <input type="checkbox" name="pan-third" id='third' value="5 springs Fresh Basil" />
            <label for='third'><span className="pantry-text"> 5 springs Fresh Basil </span> </label><br />
            <input type="checkbox" name="pan-fourth" id='fourth' value="6 heads of Garlic" />
            <label for='fourth'><span className="pantry-text"> 6 heads of Garlic </span> </label><br />
            <input type="checkbox" name="pan-fifth" id='fifth' value="2 Bags Spring Mix Salad Greens" />
            <label for='fifth'><span className="pantry-text"> 2 cups Spring Mix Salad Greens </span> </label><br />
            <input type="checkbox" name="pan-sixth" id='sixth' value="5 lbs Salt" />
            <label for='sixth'><span className="pantry-text"> 5 lbs Salt </span> </label><br />
            <input type="checkbox" name="pan-seventh" id='seventh' value="Full Pepper " />
            <label for='first'><span className="pantry-text"> Full Pepper </span> </label><br />
            <input type="checkbox" name="pan-seventh" id='seventh' value="Bananas " />
            <label for='first'><span className="pantry-text"> Bananas </span> </label><br />
            <input type="checkbox" name="pan-seventh" id='seventh' value="1/2 loaf bread " />
            <label for='first'><span className="pantry-text"> 1/2 loaf bread </span> </label><br />
            <input type="checkbox" name="pan-seventh" id='seventh' value="1 can Coconut Milk " />
            <label for='first'><span className="pantry-text"> 1 can Coconut Milk </span> </label><br />

        </div>


    )


}

export default YourPantry;