import React, { useState } from 'react'
import { Button } from '@mui/material'
import ImageUpload from './ImageUpload';

function Form()
{

  const [title, setTitle] = useState('');
  const [name, setName] = useState('')
  const [steps, setSteps] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [category, setCategory] = useState('Chinese')

  return (
    <div className='create'>
        <h2>Submit A Recipe</h2>
    <form>
        <label>Recipe Title</label>
        <input type='text' required
        value={title} onChange={(e) =>setTitle(e.target.value)}/>

        <label>Your Name</label>
        <input type='text' value={name} onChange={(e) =>setName(e.target.value)}/>

        <label>Ingredients</label>
        <textarea value={ingredients} onChange={(e) =>setIngredients(e.target.value)}></textarea>

        <label>Steps:</label>
           <textarea value={steps} onChange={(e) =>setSteps(e.target.value)}></textarea>
            <div className='red'>
              <input type='radio' name="type" id="veg" className='blue'/>
             <label htmlFor="veg">Veg</label>
              <input type='radio' name="type" id="nonVeg" className='blue'/>
              <label htmlFor="nonVeg">Non-veg</label>
              <input type='radio' name="type" id="Dontknow" className='blue'/>
              <label htmlFor="DontKnow">Dont Know</label>
            </div>

        
        <label>Recipe Thumbnail:</label>
        <ImageUpload/>

        <label>Category:</label>
        <select placeholder='Enter the food catgeory' value={category} onChange={(e) =>setCategory(e.target.value)}>
            <option value='1'>Chinese</option>
            <option value='2'>Japanese</option>
            <option value='3'>American</option>
            <option value='4'>Italian</option>
            <option value='5'>Nepali</option>
        </select>

        <Button>Add Recipe</Button>
    </form>
    
    </div>
  )
}

export default Form