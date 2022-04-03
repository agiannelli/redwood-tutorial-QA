import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = () => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <ArticleCell />
    </>
  )
}

export default ArticlePage
