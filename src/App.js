import React from 'react';
import NavBar from './components/NavBar';
import Home from './Home';
import './App.css';

function App() {
    return (
        <div>
            <div className="nav-bar-container">
                <NavBar />
            </div>
            <Home />
        </div>

    )
}

export default App;