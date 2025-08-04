import React from 'react'
import { categoryInfo } from '../utils/categoryInfo';
import CategoryComponent from './CategoryComponent';
 
export default function CategorySection(){
   

    return(
       <div className="container mx-auto max-w-7xl ">
               <h3 className="w-fit mx-auto text-white text-2xl font-semibold text-center mb-[50px] px-6 py-2 rounded-full shadow-lg shadow-fuchsia-600">
                 Shop by Categories
               </h3>
               <div className="flex flex-row gap-0">
                 {categoryInfo?.map((info, idx) => (
                    <CategoryComponent key={idx} data={info}/>
                 ))}
               </div>
             </div>
    );
}