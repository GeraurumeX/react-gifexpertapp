import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifFridItem';



export const GifGrid = ( { category} ) => {


    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid"> 
                    {
                        images.map( imgs => (
                            <GifGridItem 
                            key={ imgs.id } 
                            //img ={ img }
                            //opcion desestructuracion
                            { ...imgs } 
                            />
                        ) )
                    }
            </div> 
        </>
    )
}
