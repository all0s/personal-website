import Layout from 'components/common/Layout'
import Posts from 'components/common/Posts'
import type { Post } from 'modules/post/types'
import { SITE_NAME } from 'modules/site/constants'
import styles from './IndexPage.module.scss'

export type IndexPageProps = {
  posts: Post[]
}

function IndexPage({ posts }: IndexPageProps) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>{SITE_NAME}</h1>
        <Posts posts={posts} />
      </div>
    </Layout>
  )
}

export default IndexPage
