import { useEffect, useState } from 'react'
function App () {

  const [enabled, setEnable] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    } 
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <h1>Proyecto 3</h1>
      <div style={{
        position: 'absolute',
        transform: `translate(${position.x}px, ${position.y}px)`,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
      }}></div>
      <p>{position.x}</p>
      <button onClick={() => setEnable(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
 
      
      {/* {
        enabled
          ? (
            <p>Estoy activado</p>
            )
          : (
            <p>Estoy desactivado</p>
            )

      } */}
    </>
  )
}

export default App
