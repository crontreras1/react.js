import Card from './components/Card'
import Counter from './components/Counter'
import './App.css'

function App() {
  const list = ['React', 'Vite', 'JavaScript', 'Tailwind']

  return (
    <section>
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>
              { item }
            </li>
          ))
        }
      </ul>

      <Card title='Card 1' description='Esta es una descripción'/>

      <Counter />
    </section>
  )
}

export default App
