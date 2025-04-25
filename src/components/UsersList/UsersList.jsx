import { useEffect, useState } from "react"

const UsersList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('🚨 Error!!: ', error))
  }, [])
  
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

export default UsersList