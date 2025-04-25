const StaticComponent = () => {
  const fruits = ['Manzana', 'Mango', 'Pera', 'Piña']

  return (
    <ul>
      {
        fruits.map((fruit, index) => (
          <li key={ index }>{ fruit }</li>
        ))
      }
    </ul>
  )
}

export default StaticComponent