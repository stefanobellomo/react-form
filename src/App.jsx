
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

  return (
    <>

      <main className="container">
        <h1>Write your article</h1>
        <div>
          <ul class="list-group">
            {titleArticles.map(article => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center" key={article.id}>
                {article.title}
                <span class="badge bg-secondary badge-pill"></span>
              </li>
            ))}

          </ul>

        </div>
      </main>



    </>
  )
}

export default App
