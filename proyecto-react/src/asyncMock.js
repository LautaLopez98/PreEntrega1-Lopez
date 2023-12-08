
export const getGames = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...products])
        }, 300)
    })

}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productId.find(prod => prod.id === productId))
        }, 300)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(
                (prod) => prod.category === productCategory
            )
            resolve([...filteredProducts])
        }, 300)
    })
}