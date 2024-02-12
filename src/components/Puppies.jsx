function Puppies({ puppies, setPuppies }){
    const getPuppies = async () => {
        try{
            const cohort = '2308-ACC-PT-WEB-PT-B';
            const url = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`;
            const response = await fetch(url);
            const result = await response.json();
            setPuppies(result.data);
        }catch(err){
            console.error(err);
        }
    }
    getPuppies();

    return (
        <>
            <div>
            </div>
        </>
    )
}

export default Puppies
