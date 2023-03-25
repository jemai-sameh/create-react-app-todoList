import React from 'react'

export const TodoInput = ( {todo,setTodo}) => {
  return (
    <div className='input-wrapper'>
        <input type="text" name="todo" 
        value=""
        placeholder='create new Todo' />
        <button className='add-button' >Add</button>
    </div>
  )
}
