import { useState } from "react"

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <section>
      <button onClick={ () => setIsActive(!isActive) }>
        { isActive ? '😊 Activo' : '😔 Intactivo' }
      </button>
    </section>
  )
}

export default ToggleButton