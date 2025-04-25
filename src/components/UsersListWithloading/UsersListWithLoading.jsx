import { useEffect, useState } from "react"

const UsersListWithLoading = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/')

        if (!response.ok) {
          throw new Error('Error al obtener los datos')
        }

        const data = await response.json()

        setUsers(data)
      } catch (error) {
          setError(error)
      } finally {
          setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])




  if (isLoading) {
    return <p>🥱 Cargando...</p>
  }

  if (error) {
    return <p>😵 Error encontrado...</p>
  }
  
  return (
    <section>
      <h2>Lista de usuarios</h2>

      <ul>
        {
          users.map(user => (
            <li key={ user.id }>{ user.name }</li>
          ))
        }
      </ul>
    </section>
  )
}

export default UsersListWithLoading