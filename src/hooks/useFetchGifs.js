import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImage = async() => {
        const newImages = await getGif(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect( () => {
        getImage()
    },[])
    
    return {
        images: images,
        isLoading: isLoading
    }
}