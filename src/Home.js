import React from 'react';
import './Home.css';
import Picture from './components/PictureComponent';
import Ingredients from './components/IngredientsComponent';
import Stars from './components/Stars';
import Instructions from './components/InstructionsComponent';
import MadeByOthers from './components/MadeByOthers';
import YourPantry from './components/YourPantry';


function Home() {
  return (
    <div className="App-Container">
      <div className="your-pantry">
        <YourPantry />
      </div>
      <div className="picture-ingredients-container">
        <Picture />
        <div className="ingredients">
          <Ingredients />
        </div>
        <div className="stars">
          <Stars />
        </div>
      </div>
      <div className="instuctions">
        <Instructions />
      </div>
      <div className="madeByOthers">
        <div className="single-made">
          <MadeByOthers />
        </div>
        <div className="single-made">
          <MadeByOthers />
        </div>
        <div className="single-made">
          <MadeByOthers />
        </div>
      </div>
    </div>
  );
}

export default Home;
