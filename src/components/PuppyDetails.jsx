function PuppyDetails({selectedPuppy, setSelectedPuppy}){
    const deletePuppy = async() => {
        try{
            const endpoint = '';
            const url = ``;
            const response = await fetch(url);
            const result = await response.json();
            setSelectedPuppy(null);
            setPuppies(null);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <>
            <div>
                <button type='button' onClick={()=>{setSelectedPuppy(null)}}>Back to Puppies</button>
                <div>{`${selectedPuppy.name}`}</div>
                <li>Team Id: {selectedPuppy.teamId}</li>
                <li>Cohort Id: {selectedPuppy.cohortId}</li>
                <button type='button' onClick={()=>{deletePuppy}}>Delete Puppy</button>
            </div>
        </>
    )
}

export default PuppyDetails
