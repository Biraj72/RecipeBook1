import React from 'react'
import { Button } from '@mui/material'
function Form()
{
  return (
    <div className='create'>
        <h2>Submit A Recipe</h2>
    <form>
        <label>Recipe Title</label>
        <input type='text' required/>

        <label>Your Name</label>
        <input type='text'/>

        <label>Ingredients</label>
        <textarea></textarea>

        <label>Steps:</label>
        <textarea></textarea>

        <input type='radio' name="type"/>Veg
        <input type='radio' name="type"/>Non-veg

        <label>Recipe Thumbnail</label>
        <input type='image' required/>

        <label>Category:</label>
        <select aria-placeholder='Enter the food catgeory'>
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