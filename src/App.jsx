import './App.css'
import { useState } from 'react'
import Puppies from './components/Puppies'
import PuppyDetails from './components/PuppyDetails'

function App() {
    const [selectedPuppy, setSelectedPuppy] = useState(null);
    const [puppies, setPuppies] = useState([])

    return (
        <>
            {selectedPuppy
                ?(<PuppyDetails selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy} />)
                :(<Puppies puppies={puppies} setPuppies={setPuppies} setSelectedPuppy={setSelectedPuppy} />)
            }
        </>
    )
}

export default App
