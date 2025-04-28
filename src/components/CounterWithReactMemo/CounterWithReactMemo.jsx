import React, { useCallback, useMemo, useState } from "react"

const Child = React.memo(({ counter }) => {
  console.log('renderizando Child')

  return <p> Contador en: { counter }</p>
})

function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    console.log('canculating...')

    return num * 2
  }, [num])

  return <p>Result: { result }</p>
}

function CounterWithReactMemo () {
  const [counter, setCounter] = useState(0)

  const increment = () => useCallback(setCounter(prev => prev + 1))

  return (
    <section>
      <h2>Counter with react memo</h2>

      <button onClick={ increment }>➕</button>

      <Child counter={ counter }/>

      <ExpensiveCalculation num={ counter }/>
    </section>
  )
}

export default CounterWithReactMemo