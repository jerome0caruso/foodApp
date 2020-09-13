import React from 'react';
import './IngredientsComponent.css';


function Ingredients() {
    return (
        <div className="recipe-container">
            <input type="checkbox" name="in-first" id='first' value="2(lbs) freshly ground chuck" />
            <label for='first'><span className="recipe-text"> 2 Cups Bowtie Pasta Noodles </span> </label><br />
            <input type="checkbox" name="in-second" id='second' value="1/2 lbs Cherry Tomatoes" />
            <label for='second'><span className="recipe-text"> 1/2 lbs Cherry Tomatoes </span> </label><br />
            <input type="checkbox" name="in-third" id='third' value="1/4 cup Chopped Fresh Basil" />
            <label for='third'><span className="recipe-text"> 1/4 cup Chopped Fresh Basil </span> </label><br />
            <input type="checkbox" name="in-fourth" id='fourth' value="3 Cloves of Garlic" />
            <label for='fourth'><span className="recipe-text"> 3 Cloves of Garlic </span> </label><br />
            <input type="checkbox" name="in-fifth" id='fifth' value="2 cups Spring Mix Salad Greens" />
            <label for='fifth'><span className="recipe-text"> 2 cups Spring Mix Salad Greens </span> </label><br />
            <input type="checkbox" name="in-sixth" id='sixth' value="1 Tbl Salt" />
            <label for='sixth'><span className="recipe-text"> 1 Tbl Salt </span> </label><br />
            <input type="checkbox" name="in-seventh" id='seventh' value="Several turns of Pepper " />
            <label for='first'><span className="recipe-text"> Several turns/Dashes of Pepper </span> </label><br />
        </div >
    );
}

export default Ingredients;
