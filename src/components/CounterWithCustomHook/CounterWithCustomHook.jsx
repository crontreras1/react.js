import useCounter from "../../hook/useCounter"

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(23)

  return (
    <section>
      <h2>Counter with custom hook</h2>
  
      <p>Contador en: { counter }</p>

      <button onClick={ increment }>➕</button>

      <button onClick={ decrement }>➖</button>
      
      <button onClick={ reset }>Reset</button>
    </section>
  )
}

export default CounterWithCustomHook