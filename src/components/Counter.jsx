import { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <section>
      <div> El contador está en: { counter }</div>
  
      <button onClick={() => setCounter(counter + 1)}>+</button>
  
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </section>
  )
} 

export default Counter