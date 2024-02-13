function Puppy({puppy, setSelectedPuppy}){
    return (
        <>
            <div key={puppy.id} onClick={()=>{setSelectedPuppy(puppy)}} className={'puppy'}>
                <ul>
                    <img src={puppy.imageUrl}></img>
                    <li>{puppy.name}</li>
                    <li>{puppy.breed}</li>
                    <li>Team Id: {puppy.teamId}</li>
                    <li>Cohort Id: {puppy.cohortId}</li>
                </ul>
            </div>           
        </>
    )
}

export default Puppy
