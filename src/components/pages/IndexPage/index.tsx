import Layout from 'components/common/Layout'
import Posts from 'components/common/Posts'
import SiteDescription from 'components/common/SiteDescription'
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
        <div className={styles.header}>
          <h1>{SITE_NAME}</h1>
          <SiteDescription />
        </div>
        <Posts posts={posts} />
      </div>
    </Layout>
  )
}

export default IndexPage
