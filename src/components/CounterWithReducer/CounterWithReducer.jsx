import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state 
  }
}
const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <section>
      <h1>Contador con useReducer</h1>

      <p>contador en: { state.count }</p>

      <button onClick={ () => dispatch({ type: 'increment' }) }>➕</button>
      <button onClick={ () => dispatch({ type: 'decrement' }) }>➖</button>
    </section>
  )
}

export default CounterWithReducer