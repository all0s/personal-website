import Layout from 'components/common/Layout'
import SiteDescription from 'components/common/SiteDescription'
import type { Post } from 'modules/post/types'
import styles from './PostsIdPage.module.scss'

export type PostsIdPageProps = {
  post: Post | null
}

function PostsIdPage({ post }: PostsIdPageProps) {
  return (
    <Layout>
      <div className={styles.container}>
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <SiteDescription />
      </div>
    </Layout>
  )
}

export default PostsIdPage
