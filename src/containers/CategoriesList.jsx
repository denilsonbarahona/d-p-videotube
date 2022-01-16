import React from 'react';
import LayoutCategories from '../layouts/LayoutCategories';
import Tag from '../components/Tag';
import useGetCategories from '../hooks/useGetCategories';

const CategoriesList =()=>{

    const categories = useGetCategories();

    return (
         <LayoutCategories>
             <Tag 
                tagName="All" 
                tagId='0' />

             {categories.map((category)=>(
                 <Tag                      
                     key = {category.id}
                     tagId={category.id}
                     tagName={category.snippet.title} />
             ))} 
         </LayoutCategories>
    )
}

export default CategoriesList;