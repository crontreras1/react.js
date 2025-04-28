import Card from './components/Card'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import CounterWithEffect from './components/CounterWithEffect'
import StaticComponent from './components/StaticComponent/StaticComponent'
import UsersList from './components/UsersList/UsersList'
import UsersListWithLoading from './components/UsersListWithloading/UsersListWithLoading'
import SearchPost from './components/SearchPost/SearchPost'
import CounterWithReducer from './components/CounterWithReducer/CounterWithReducer'
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

      <ToggleButton /> 

      <NameForm />

      <CounterWithEffect />

      <StaticComponent />

      <UsersList />

      <UsersListWithLoading /> 

      <SearchPost /> 

      <CounterWithReducer /> 
    </section>
  )
}

export default App
