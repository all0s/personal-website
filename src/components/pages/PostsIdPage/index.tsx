import Layout from 'components/common/Layout'
import SiteDescription from 'components/common/SiteDescription'
import { SITE_NAME } from 'modules/site/constants'
import Link from 'next/link'

import styles from './PostsIdPage.module.scss'

import type { Post } from 'modules/post/types'

export type PostsIdPageProps = {
  post: Post | null
}

function PostsIdPage({ post }: PostsIdPageProps) {
  if (!post) {
    return null
  }

  const {
    content,
    meta: { date, title },
  } = post

  return (
    <Layout>
      <div className={styles.container}>
        <h1>
          <Link href="/">
            <a>{SITE_NAME}</a>
          </Link>
        </h1>
        <div className={styles.main}>
          <div className={styles.date}>{date}</div>
          <h2 className={styles.title}>{title}</h2>
          <div>{content}</div>
        </div>
        <SiteDescription />
      </div>
    </Layout>
  )
}

export default PostsIdPage
