import { useState } from "react"
import { Board } from './components/Board.jsx'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.jsx'
import { checkWinner, checkEndGame } from './logic/board.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'


function App() {

  /*Funciones que guardan el valor del cambio de estado*/
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null) //null no hay ganador, false hay empate

  /*Funcion  que hace el cambio de estado*/
  const updateBoard = (index) => {
    // si esa posición del tablero elegida ya tiene algo, no devuelve nada
    if (board[index] || winner) return

    // actualizo el tablero por uno nuevo con la posición ocupada
    const newBoard = [...board]
    newBoard[index] = turn  // x u o, antes null
    setBoard(newBoard)

    // cambio de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //Detecta el ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  return (
    <main className="board">
      <h1>Ta Te Ti</h1>
      <Board board={board} updateBoard={updateBoard} />
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {
        winner === null
          ? null
          : (
            <WinnerModal resetGame={resetGame} winner={winner} />
          )
      }
    </main>
  )
}


export default App
