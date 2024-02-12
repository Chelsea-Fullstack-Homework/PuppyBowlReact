import { Route, Routes, Link} from 'react-router-dom'
import Puppies from './Puppies' 
import Player from './Player'

function NavBar(){
    return (
        <>
        <nav>
            <Link to='/'>Puppies</Link>
        </nav>
            <Routes>
                <Route path='/' element={<Puppies />} />
                <Route path='/player' element={<Player />} />
            </Routes>
        </>
    )
}

export default NavBar
