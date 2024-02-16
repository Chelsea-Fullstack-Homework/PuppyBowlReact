import { useState } from 'react'

function CreatePuppy({puppies, setPuppies}){
    const [puppyData, setPuppyData] = useState({
        name: '',
        breed: '',
        status: '',
        imgUrl: '',
    })
    
    const postPuppy = async() => {
        console.log('posting');
        try{
            const endpoint = 'api/2308-ACC-PT-WEB-PT-B/players';
            const url = `https://fsa-puppy-bowl.herokuapp.com/${endpoint}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: puppyData.name,
                    breed: puppyData.breed,
                    status: puppyData.status,
                    imageUrl: puppyData.imgUrl
                })
            });
            const result = await response.json();
            setPuppies(null);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <form className='create-puppy'>
                <label htmlFor='name'>Name</label>
                <input onChange={(e)=>{setPuppyData(puppyData => ({
                        ...puppyData,
                        ...{'name': `${e.target.value}` }
                    }))}} 
                    value={puppyData.name}
                    type={'text'} 
                    id='name' 
                /> 
                <label htmlFor='breed'>Breed</label>
                <input onChange={(e)=>{setPuppyData(puppyData => ({
                        ...puppyData,
                        ...{'breed': `${e.target.value}` }
                    }))}} 
                    value={puppyData.breed}
                    type={'text'} 
                    id='Breed' 
                /> 
                <label htmlFor='status'>Status</label>
                <input onChange={(e)=>{setPuppyData(puppyData => ({
                        ...puppyData,
                        ...{'status': `${e.target.value}` }
                    }))}} 
                    value={puppyData.status}
                    type={'text'} 
                    id='Status' 
                /> 
                <label htmlFor='image-url'>Image Url</label>
                <input onChange={(e)=>{setPuppyData(puppyData => ({
                        ...puppyData,
                        ...{'imgUrl': `${e.target.value}` }
                    }))}} 
                    value={puppyData.imgUrl}
                    type={'text'} 
                    id='image-url' 
                /> 
            </form>
            <button type='button' onClick={()=>{postPuppy()}}><h2>Create Puppy</h2></button>
        </>
    )
}

export default CreatePuppy
