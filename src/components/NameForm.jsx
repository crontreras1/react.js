import { useState } from "react"

const NameForm = () => {
  const [name, setName] = useState('')

  return (
    <section>
      <input 
        type="text"
        placeholder="Nombre"
        value={ name }
        onChange={ (e) => { setName(e.target.value) } }
      />

      <p>Hola, { name || 'visitante'}</p>
    </section>
  )
}

export default NameForm