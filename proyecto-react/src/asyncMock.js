const products = [
    { id: "1",nombre: "Marvel's Spiderman 2", price: "90.000", category: "PS5", img: "https://dixgamer.com/wp-content/uploads/2023/08/Marvel-Spiderman-2-330x404.jpg", stock: "1"},
    { id: "2",nombre: "Final Fantasy XVI", price: "$80.000", category: "PS5", img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1686582252-81TQ9fgZhL.jpg?crop=1xw:1xh;center,top&resize=980:*", stock: "4"},
    { id: "3",nombre: "Dead Space", price: "$80.000", category: "PS5", img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1673613239-51OqxJ98zEL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*", stock: "2"},
    { id: "4",nombre: "Star Wars Jedi Survivor", price: "$80.000", category: "PS5", img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1682505901-71zitZvEtL.jpg?crop=1xw:1xh;center,top&resize=980:*", stock: "5"},
    { id: "5",nombre: "F1 2023", price: "$85.000", category: "PS5", img: "https://dixgamer.com/wp-content/uploads/2023/05/f1-23-standard-edition-ps5-330x404.jpg", stock: "1"},
    { id: "6",nombre: "Resident Evil 4 Remake", price: "$70.000", category: "PS5", img: "https://dixgamer.com/wp-content/uploads/2023/02/resident-evil-4-remake-ps5-1.jpg", stock: "4"},
    { id: "7",nombre: "Hogwarts Legacy", price: "$85.000", category: "PS5", img: "https://dixgamer.com/wp-content/uploads/2023/02/hogwarts-legacy-ps5-retro-330x404.jpg", stock: "3"},
    { id: "8",nombre: "God Of War Ragnarok", price: "$60.000", category: "PS5", img: "https://dixgamer.com/wp-content/uploads/2022/08/god-of-war-ragnarok-ps5-retro-330x404.jpg", stock: "2"},
    { id: "9",nombre: "FC24", price: "$90.000", category: "PS5", img: "https://dixgamer.com/wp-content/uploads/2023/09/EA-SPORTS-FC-24-Standard-Edition-PS5-330x404.jpg", stock: "5"},
    { id: "10",nombre: "Mortal Kombat 1", price: "$90.000", category: "PS5", img: "https://dixgamer.com/wp-content/uploads/2023/08/Mortal-Kombat-1-2-330x404.jpg", stock: "8"},
    { id: "11",nombre: "Assassin's Creed Mirage", price: "$21.000", category: "PS4", img: "https://dixgamer.com/wp-content/uploads/2023/10/assassins-creed-mirage-330x404.jpg", stock: "8"},
    { id: "12",nombre: "Bloodborne", price: "$5.000", category: "PS4", img: "https://dixgamer.com/wp-content/uploads/2017/01/Bloodborne-1-330x413.jpg", stock: "2"},
    { id: "13",nombre: "Dark Souls 3", price: "$28.000", category: "PS4", img: "https://dixgamer.com/wp-content/uploads/2017/09/dark-souls-3-330x411.jpg", stock: "4"},
    { id: "14",nombre: "Days Gone", price: "$20.000", category: "PS4", img: "https://dixgamer.com/wp-content/uploads/2019/03/Days-Gone-1-330x413.jpg", stock: "5"},
    { id: "15",nombre: "Cyberpunk 2077", price: "$40.000", category: "PS4", img: "https://dixgamer.com/wp-content/uploads/2020/10/cyberpunk-2077-330x404.jpg", stock: "10"},
    { id: "16",nombre: "Doom", price: "$5.000", category: "PS4", img: "https://dixgamer.com/wp-content/uploads/2016/11/Doom-1-330x413.jpg", stock: "8"},
    { id: "17",nombre: "Dying Light", price: "$5.000", category: "PS4", img: "https://dixgamer.com/wp-content/uploads/2018/01/dying-light-1-330x404.jpg", stock: "5"},
    { id: "18",nombre: "FC24", price: "$50.000", category: "PS4", img: "https://dixgamer.com/wp-content/uploads/2023/07/EA-SPORTS-FC%E2%84%A2-24-Standard-Edition-330x404.jpg", stock: "8"},
    { id: "19",nombre: "Far Cry Primal", price: "$20.000", category: "PS4", img: "https://dixgamer.com/wp-content/uploads/2016/12/Far-Cry-Primal-1-1-330x413.jpg", stock: "3"},
    { id: "20",nombre: "F1 2022", price: "$80.000", category: "PS4", img: "https://dixgamer.com/wp-content/uploads/2022/07/f1-22-330x404.jpg", stock: "5"},
    { id: "21",nombre: "Alien Isolation", price: "$80.000", category: "PS3", img: "https://dixgamer.com/wp-content/uploads/2016/11/alien-isolation-330x380.jpg", stock: "8"},
    { id: "22",nombre: "Batman Arkham City", price: "$5.000", category: "PS3", img: "https://dixgamer.com/wp-content/uploads/2016/11/Batman-Arkham-City-1-1-330x397.jpg", stock: "4"},
    { id: "23",nombre: "Bayonetta", price: "$4.000", category: "PS3", img: "https://dixgamer.com/wp-content/uploads/2019/09/bayonetta-330x397.jpg", stock: "8"},
    { id: "24",nombre: "Borderlands 2", price: "$3.000", category: "PS3", img: "https://dixgamer.com/wp-content/uploads/2019/03/Borderlands-2-1-330x397.jpg", stock: "2"},
    { id: "25",nombre: "Call Of Duty BO2", price: "$80.000", category: "PS3", img: "https://dixgamer.com/wp-content/uploads/2017/08/call-of-duty-black-ops-2-revolution-map-pack-2-330x380.jpg", stock: "3"},
    { id: "26",nombre: "Far Cry 3", price: "$5.000", category: "PS3", img: "https://dixgamer.com/wp-content/uploads/2016/11/Far-Cry-3-1-330x397.jpg", stock: "1"},
    { id: "27",nombre: "Fifa Street", price: "$5.000", category: "PS3", img: "https://dixgamer.com/wp-content/uploads/2017/08/fifa-street-1-330x379.jpg", stock: "4"},
    { id: "28",nombre: "GTA V", price: "$6.000", category: "PS3", img: "https://dixgamer.com/wp-content/uploads/2017/08/gta-v-1-330x378.jpg", stock: "3"},
    { id: "29",nombre: "Payday 2", price: "$5.000", category: "PS3", img: "https://dixgamer.com/wp-content/uploads/2016/11/PayDay-2-1-330x397.jpg", stock: "5"},
    { id: "30",nombre: "Resident Evil 4", price: "$7.000", category: "PS3", img: "https://dixgamer.com/wp-content/uploads/2016/12/Resident-Evil-4-1-330x397.jpg", stock: "4"},
    
]

export const getGames = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve([...products])
        }, 300)
    }) 
        
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 300)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(
                (prod) => prod.category ===productCategory
            )
            resolve([...filteredProducts])
        }, 300)
    })
}