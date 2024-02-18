function CreatePuppyButton({puppyData, setPuppies, setPuppyData}){
    const postPuppy = async() => {
        console.log('posting');
        try{
            const endpoint = 'api/2308-ACC-PT-WEB-PT-B/players';
            const url = `https://fsa-puppy-bowl.herokuapp.com/${endpoint}`;
            let imgUrl = 'https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png';
            if(puppyData.imgUrl !== '') imgUrl = puppyData.imgUrl;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: puppyData.name,
                    breed: puppyData.breed,
                    status: puppyData.status,
                    imageUrl: imgUrl
                })
            });
            const result = await response.json();
            if(result.success){
                setPuppies([]);
                setPuppyData({
                    name: '',
                    breed: '',
                    status: 'bench',
                    imgUrl: '',
                });
            }
            console.error(`failed to create puppy due to: ${result.error.message}`);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <button type='button' onClick={(e)=>{postPuppy(e)}}><h2>Create Puppy</h2></button>
        </>
    )
}

export default CreatePuppyButton
