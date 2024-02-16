import './App.css'
import { useState } from 'react'
import Puppies from './components/Puppies'
import PuppyDetails from './components/PuppyDetails'
import CreatePuppy from './components/CreatePuppy'

function App() {
    const [selectedPuppy, setSelectedPuppy] = useState(null);
    const [puppies, setPuppies] = useState([])

    return (
        <>
            <CreatePuppy puppies={puppies} setPuppies={setPuppies}/>
            {selectedPuppy
                ?(<PuppyDetails selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy} />)
                :(<Puppies puppies={puppies} setPuppies={setPuppies} setSelectedPuppy={setSelectedPuppy} />)
            }
        </>
    )
}

export default App
