import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["The simpson"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // categories.push(newCategory) <--- NO UTILIZAR
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Valorant'])
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        currentCategories={categories}
      />

      
        {categories.map((category) => (
            <GifGrid 
            key={category} 
            category={category} />
        ))}
      
    </>
    );
};
