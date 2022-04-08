import { routes, Link } from '@redwoodjs/router'
const Article = ({ article }) => {
  return (
    <article key={article.id}>
      <header>
        <h1>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h1>
      </header>
      <p>{article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
