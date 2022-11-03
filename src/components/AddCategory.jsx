import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( inputValue.trim().length <= 1 ) return; 
    onAddCategory(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={  handleSubmit }>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search Gifs" 
        value = { inputValue }
        onChange = { handleInputChange }
      />
    </form>
  )
}
