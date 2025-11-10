import { useState } from "react"
import Form from "./Form"

export default function Main(props) {

    const [articles, setArticles] = useState(props.titleArticles)
    // const [newArticle, setNewArticle] = useState('')

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     if (newArticle.length < 4) {
    //         setNewArticle('')
    //     } else {
    //         const article = {
    //             id: articles[articles.length - 1].id + 1,
    //             title: newArticle,
    //         }
    //         const addNewArticle = [...articles, article]
    //         setArticles(addNewArticle)
    //         setNewArticle('')
    //     }
    // }

    function handleTrash(id) {
        const filteredArticles = articles.filter((article) => article.id !== id)
        setArticles(filteredArticles)
    }


    return (
        <div className="container">
            <h1>Write your article</h1>

            <div className="col-6 mx-auto">
                <div className="card p-3">

                    <Form articles={articles} setArticles={setArticles} />
                    {/* <form onSubmit={handleSubmit}>
                        <input type="text" value={newArticle} onChange={(e) => setNewArticle(e.target.value)} />
                        <button className="badge bg-success my-4 mx-4" type="submit">Add</button>
                    </form> */}

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
        </div>

    )
}