import { useState } from 'react'
import CreatePuppyButton from './CreatePuppyButton'

function CreatePuppy({setPuppies}){
    const [puppyData, setPuppyData] = useState({
        name: '',
        breed: '',
        status: 'bench',
        imgUrl: '',
    })
    
    return (
        <>
            <form className='create-puppy'>
                <legend>Create A Puppy</legend>
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
                    id='breed' 
                /> 
                <label htmlFor='status'>Status</label>
                <select id='status' value={puppyData.status} onChange={(e)=>{setPuppyData(puppyData => ({
                        ...puppyData,
                        ...{'status': `${e.target.value}` }
                    }))}}>
                    <option value='bench'>bench</option>
                    <option value='field'>field</option>
                </select>
                <label htmlFor='image-url'>Image Url</label>
                <input onChange={(e)=>{setPuppyData(puppyData => ({
                        ...puppyData,
                        ...{'imgUrl': `${e.target.value}` }
                    }))}} 
                    value={puppyData.imgUrl}
                    type={'text'} 
                    id='image-url' 
                /> 
                {
                    ((puppyData.name && puppyData.breed && puppyData.status) 
                    && (<CreatePuppyButton puppyData={puppyData} setPuppies={setPuppies} setPuppyData={setPuppyData} />))
                }
            </form>
        </>
    )
}

export default CreatePuppy
