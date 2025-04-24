import { useEffect, useState } from "react"

const CounterWithEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`El contador cambió a: ${count}`)
  }, [count])

  return (
    <section>
      <div> El contador está en: { count }</div>
  
      <button onClick={() => setCount(count + 1)}>+</button>
    </section>
  )
}

export default CounterWithEffect