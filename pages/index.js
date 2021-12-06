import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    < div >
      <Head>
        <title>WebDev news</title>
        <meta name="keywords" content="web, dev, news"></meta>
      </Head>
      <h1>Welcome to Next</h1>
      <ArticleList articles={articles} />
    </div >
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonPlaceHolder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}