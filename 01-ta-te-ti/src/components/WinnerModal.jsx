import { Square } from './Square.jsx'
export function WinnerModal({ winner, resetGame }) {
    const modalText = winner == false
        ? 'Empate'
        : `Ganó`
    return (
        <section className="winner">
            <div className="text">
                <h2>
                    {
                        modalText
                    }
                </h2>
                <header className="win">
                    <Square > {winner}</Square>
                </header>
                <button onClick={resetGame}>Empezar de nuevo</button>
            </div>


        </section>
    )
}
