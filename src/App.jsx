import Navbar from "./components/Navbar"
import Chessboard from "./components/Chessboard"

function App() {
  return (
    <main className='flex flex-col h-full'>
      <Navbar></Navbar>
      <Chessboard></Chessboard>
    </main>
  )
}

export default App
