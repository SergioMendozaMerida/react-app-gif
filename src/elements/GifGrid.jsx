import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGifs"
import { GifItems } from "./GifItems"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    const{images, isLoading} = useFetchGifs(category)

  return (
    
    <>
        <h3>{category}</h3>
        {
            isLoading && <h3>Cargando...</h3>
        }
        <div className="card-grid">
            {
                images.map( (image) => {
                    return(
                        <GifItems 
                            key={image.id}
                            {...image}//pasa como props todas las propiedades de image
                        ></GifItems>
                    )
                })
            }
        </div>
        
    </>
  )
}
