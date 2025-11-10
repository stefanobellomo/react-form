import { useState } from "react"

function App() {

  const titleArticles = [
    { "id": 1, "title": "Benvenuto" },
    { "id": 2, "title": "Novità Settimana" },
    { "id": 3, "title": "Guide React" },
    { "id": 4, "title": "Trucchi CSS" },
    { "id": 5, "title": "JS per Iniziare" },
    { "id": 6, "title": "Debug Comune" },
    { "id": 7, "title": "Errori da Evitare" },
    { "id": 8, "title": "Consigli UI/UX" },
    { "id": 9, "title": "Setup Progetto" },
    { "id": 10, "title": "Note di Changelog" }
  ]

  const [articles, setArticles] = useState(titleArticles)
  const [newArticle, setNewArticle] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    if (newArticle.length < 4) {
      setNewArticle('')
    } else {
      const article = {
        id: articles[articles.length - 1].id + 1,
        title: newArticle,
      }
      const addNewArticle = [...articles, article]
      setArticles(addNewArticle)
      setNewArticle('')
    }
  }

  function handleTrash(id) {
    const filteredArticles = articles.filter((article) => article.id !== id)
    setArticles(filteredArticles)
  }

  return (
    <>

      <main className="container">

        <h1>Write your article</h1>

        <div className="col-6 mx-auto">
          <div className="card p-3">

            <form onSubmit={handleSubmit}>
              <input type="text" value={newArticle} onChange={(e) => setNewArticle(e.target.value)} />
              <button className="badge bg-success my-4 mx-4" type="submit">Add</button>
            </form>

            <ul className="list-group">
              {articles.map(article => (
                <li key={article.id}
                  className="list-group-item d-flex justify-content-between align-items-center">
                  {article.title}
                  <button className="badge bg-danger badge-pill" onClick={() => handleTrash(article.id)}><i className="bi bi-trash"></i></button>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </main>



    </>
  )
}

export default App
