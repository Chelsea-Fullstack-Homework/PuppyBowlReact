function PuppyDetails({selectedPuppy, setSelectedPuppy}){
    return(
        <>
            <div>
                <button type='button' onClick={()=>{setSelectedPuppy(null)}}>Back to Puppies</button>
                <div>{`${selectedPuppy.name}`}</div>
            </div>
        </>
    )
}

export default PuppyDetails
