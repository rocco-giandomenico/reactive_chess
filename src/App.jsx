import Navbar from "./components/Navbar"
import Chessboard from "./components/Chessboard"
import Footer from "./components/Footer"

function App() {
  return (
    <main className='flex flex-col h-full'>
      <Navbar></Navbar>
      <Chessboard></Chessboard>
      <Footer></Footer>
    </main>
  )
}

export default App
