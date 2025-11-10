import { useState } from "react"
import Form from "./Form"
import List from "./List"

export default function Main(props) {

    const [articles, setArticles] = useState(props.titleArticles)

    return (
        <div className="container">
            <h1>Write your article</h1>

            <div className="col-6 mx-auto">
                <div className="card p-3">

                    <Form articles={articles} setArticles={setArticles} />

                    <List articles={articles} setArticles={setArticles} />

                </div>
            </div>
        </div>

    )
}