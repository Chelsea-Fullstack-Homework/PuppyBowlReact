import './App.css'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Puppies from './components/Puppies'
import Player from './components/Player'

function App() {
    const [player, setPlayer] = useState('');
    const [puppies, setPuppies] = useState(null);

    return (
        <>
            <NavBar />
            {player
                ? (<Player player={player} setPlayer={setPlayer} setPuppies={setPuppies} />)
                : (<Puppies puppies={puppies} setPuppies={setPuppies} />)
            }
        </>
    )
}

export default App
