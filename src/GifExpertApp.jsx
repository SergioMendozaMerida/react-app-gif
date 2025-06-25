import { useState } from "react"
import { AddCategory, GifGrid } from "./elements"//esto es porque se creo el index en la carpeta elements


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Futurama'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
        }

  return (
    <>
        {/*titulo*/}
        <h1>Gifs.chio</h1>
        
        {/*input*/}
        <AddCategory 
            //setCategories={agregarCategoria}
            onNewCategory={ (value) => onAddCategory(value)} 
            >
        </AddCategory>        

        {/*listado de gif */}
        
        {
            categories.map( (category) => {
                return( 
                    <GifGrid 
                        key={category}
                        category={category}
                    ></GifGrid>
                )
            })
        }
    
    </>
  )
}
