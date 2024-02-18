function PuppyDetails({selectedPuppy, setSelectedPuppy, setPuppies}){
    const deletePuppy = async(id) => {
        try{
            const endpoint = 'api/2308-ACC-PT-WEB-PT-B/players';
            const url = `https://fsa-puppy-bowl.herokuapp.com/${endpoint}/${id}`;
            const response = await fetch(url, {
                method: 'DELETE',
            });
            const result = await response.json();
            console.log(result);
            setSelectedPuppy(null);
            setPuppies([]);
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
                <button type='button' onClick={()=>{deletePuppy(selectedPuppy.id)}}>Delete Puppy</button>
            </div>
        </>
    )
}

export default PuppyDetails
