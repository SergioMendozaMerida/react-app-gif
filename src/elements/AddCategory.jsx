import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return //esto valida que no vaya vacio el inputvalue

        //setCategories(inputValue)
        onNewCategory(inputValue.trim())
        setInputValue('')
    }   

    return (
        <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="buscar gif"
            value={inputValue}
            onChange={ onInputChanged }
            >
            </input>
        </form>
    )
}
