import Layout from 'components/common/Layout'
import Posts from 'components/common/Posts'
import SiteDescription from 'components/common/SiteDescription'
import { SITE_NAME } from 'modules/site/constants'
import Link from 'next/link'

import styles from './IndexPage.module.scss'

import type { Post } from 'modules/post/types'

export type IndexPageProps = {
  posts: Post[]
}

function IndexPage({ posts }: IndexPageProps) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            <Link href="/">
              <a>{SITE_NAME}</a>
            </Link>
          </h1>
          <SiteDescription />
        </div>
        <Posts posts={posts} />
      </div>
    </Layout>
  )
}

export default IndexPage
