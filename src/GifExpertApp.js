import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    

    const [categories, setCategories] = useState(['Matrix']);


    //const handleAdd = () => {
        // Al final del arreglo
        //setCategories( [...categories, 'Disney'] );
        // AL inicio del arreglo
        //setCategories( [ 'Disney', ...categories ] );
        //Otra manera de hacerlo es con callback
        //setCategories( cats => [ ...cats, 'Disney' ] );
    //}


    return (

        <>
        
            <h2>Gif Expert App</h2>

            <AddCategory setCategories = { setCategories } />

            <hr />

            <ol>
                {
                    categories.map( category =>  (
                        <GifGrid
                        key={ category }
                        category = { category } />
                    ))
                }
            </ol>
        
        </>

    );

};


export default GifExpertApp;


