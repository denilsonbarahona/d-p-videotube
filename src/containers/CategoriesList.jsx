import React from 'react';
import LayoutCategories from '../layouts/LayoutCategories';
import Tag from '../components/Tag';

const CategoriesList =()=>{
    return (
         <LayoutCategories>
            <Tag 
                tagName={"Todos"} 
                TagStyleState='Tag--active'/>
            <Tag 
                tagName={"Todos"} 
                TagStyleState='Tag--inactive'/>
             <Tag 
                tagName={"Programación"} 
                TagStyleState='Tag--inactive'/>
             
            <Tag 
                tagName={"Música"} 
                TagStyleState='Tag--inactive'/>
         </LayoutCategories>
    )
}

export default CategoriesList;