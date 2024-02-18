import { useEffect } from 'react'
import Puppy from './Puppy'

function Puppies({puppies, setPuppies, setSelectedPuppy}){

    const fetchPuppies = async () => {
        try{
            const cohort = '2308-ACC-PT-WEB-PT-B';
            const url = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`;
            const response = await fetch(url);
            const result = await response.json();
            setPuppies(result.data.players);
            console.log('called api')
        }catch(err){
            console.error(err);
        }
    }

    if(puppies.length == 0){
        fetchPuppies();
    }

    return (
        <>
        <div className={'puppy-container'}>
                {
                    puppies.map((puppy)=>{
                        return <Puppy key={puppy.id} puppy={puppy} setSelectedPuppy={setSelectedPuppy}/> 
                    })
                }
        </div>
        </>
    )
}

export default Puppies
