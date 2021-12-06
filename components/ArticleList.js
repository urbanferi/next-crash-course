import ArticleItem from "./ArticleItem"
import styles from "../styles/Home.module.css"

const ArticleList = ({ articles }) => {
    return (
        <div className={styles.grid}>
            {
                articles.map(article => (
                    <ArticleItem article={article} key={article.key} />
                ))
            }

        </div >
    )
}

export default ArticleList
