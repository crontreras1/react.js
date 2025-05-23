import { createContext, useContext, useState } from 'react'
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
import CounterWithCustomHook from './components/CounterWithCustomHook/CounterWithCustomHook'
import CounterWithReactMemo from './components/CounterWithReactMemo/CounterWithReactMemo'
import './App.css'

const ThemeContext = createContext()

function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

function ThemeButton () {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return <button onClick={ toggleTheme } style={{ backgroundColor: theme === 'light' ? '#fff' : '#333' }}>Cambiar tema</button>
}

function App() {
  const list = ['React', 'Vite', 'JavaScript', 'Tailwind']

  return (
    <ThemeProvider>
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

        <ThemeButton />

        <CounterWithCustomHook /> 

        < CounterWithReactMemo />
      </section>
    </ThemeProvider>
  )
}

export default App
