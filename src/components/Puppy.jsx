function Puppy({puppy, setSelectedPuppy}){
    return (
        <>
            <div key={puppy.id} className={'puppy'}>
                <ul>
                    <img src={puppy.imageUrl}></img>
                    <li>{puppy.name}</li>
                    <li>{puppy.breed}</li>
                    <button type='button' onClick={()=>{setSelectedPuppy(puppy)}}>See Details</button>
                </ul>
            </div>           
        </>
    )
}

export default Puppy
