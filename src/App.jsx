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
            {selectedPuppy
                ?(<PuppyDetails selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy} setPuppies={setPuppies} />)
                :(<>
                    <CreatePuppy setPuppies={setPuppies}/>
                    <Puppies puppies={puppies} setPuppies={setPuppies} setSelectedPuppy={setSelectedPuppy} />
                  </>)
            }
        </>
    )
}

export default App
