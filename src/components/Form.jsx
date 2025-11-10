import { useState } from "react";

export default function Form({ articles, setArticles }) {

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

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newArticle} onChange={(e) => setNewArticle(e.target.value)} />
            <button className="badge bg-success my-4 mx-4" type="submit">Add</button>
        </form>
    )
}