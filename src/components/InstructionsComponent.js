import React from 'react';
import './InstructionsComponent.css';

function Instructions() {
    return (
        <div className="instruction-container">
            <input type="checkbox" name="instruction-first" id='instruction-first' value="description" />
            <label for='first'><span className="instruction-text"> Pick a roomy pot that gives the pasta plenty of space to move around in. This is a good time to call that eight-or 12-quart stockpot into action.  You want five or six quarts of water for a standard 16 oz. package of pasta.</span> </label><br />

            <input type="checkbox" name="instruction-second" id='instruction-second' value="description" />
            <label for='second'><span className="instruction-text">Salt it good! Don’t just give a single tap of the shaker — you want at least a tablespoon for 6 quarts of water. In fact, a chef we know uses 2 tablespoons of coarse salt for 6 quarts of water! You want it to be sea-water salty. Not that we go around sipping the sea, blech</span> </label><br />

            <input type="checkbox" name="instruction-third" id='instruction-third' value="description" />
            <label for='third'><span className="instruction-text"> Stir in the garlic, tomato paste, oregano, and red pepper flakes and cook, stirring continuously for about 1 minute. </span> </label><br />

            <input type="checkbox" name="instruction-fourth" id='instruction-fourth' value="description" />
            <label for='fourth'><span className="instruction-text"> ake the sauce off of the heat, and then stir in the basil. Toss in the cooked pasta, and then leave for a minute so that the pasta absorbs some of the sauce. Toss again, and then serve with parmesan sprinkled on top. </span> </label><br />

            <input type="checkbox" name="instruction-fifth" id='instruction-fifth' value="description" />
            <label for='fifth'><span className="instruction-text"> Adding a leftover rind of a parmesan wedge to the sauce at the same time as adding the tomatoes adds richness and extra flavor. It won’t melt all the way, just remove what’s left before serving. </span> </label><br />

        </div >
    );

}

export default Instructions;