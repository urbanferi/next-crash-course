import Link from 'next/link'
import styles from '../styles/Home.module.css'

const ArticleItem = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`} >
            <a className={styles.card}>
                <span>{article.title}</span>

            </a>
        </Link>
    )
}

export default ArticleItem
