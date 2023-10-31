import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div>
      <ItemListContainer greeting={"Bienvenido a Game Store"}/>
    </div>
    </>
  )
}

export default App
