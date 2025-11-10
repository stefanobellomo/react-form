export default function List({ articles, setArticles }) {

    function handleTrash(id) {
        const filteredArticles = articles.filter((article) => article.id !== id)
        setArticles(filteredArticles)
    }

    return (
        <ul className="list-group">
            {articles.map(article => (
                <li key={article.id}
                    className="list-group-item d-flex justify-content-between align-items-center">
                    {article.title}
                    <button className="badge bg-danger badge-pill" onClick={() => handleTrash(article.id)}><i className="bi bi-trash"></i></button>
                </li>
            ))}
        </ul>
    )
}