import { useState, useEffect } from "react"
import { getGames, getProductByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [games, setGames] = useState ([])

    const {categoryId} =useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getGames
        asyncFunc(categoryId)
            .then(response => {
                setGames(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    
    return(
        <div>
            <h1>
                {greeting}
            </h1>
            <ItemList games={games}/>
        </div>
    )
}

export default ItemListContainer