import { useEffect, useState } from "react"

const SearchPost = () => {
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('🚨 Error!!: ', error))
  }, [query])

  return (
  <section>
    <h2>Lista de usuarios</h2>

    <input 
      type="text" 
      placeholder="Buscar por título"
      value={ query }
      onChange={ event => setQuery(event.target.value) }
    />

    <ul>
      {
        posts.map(post => (
          <li key={ post.id }>{ post.title }</li>
        ))
      }
    </ul>
  </section>
  )
}

export default SearchPost