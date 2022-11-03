import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One punch' ]);

  const onAddCategory = (value) => {
    if( categories.includes(value) ) return;
    setCategories( [ value, ...categories ] );
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={ onAddCategory } />

      { 
        categories.map( (category) => (
          <GifGrid 
            key={ category } 
            category={ category } 
          />
        )) 
      }
    </>
  );
}
