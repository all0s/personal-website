import type { Post } from 'modules/post/types'
import Link from 'next/link'

import styles from './PostEntry.module.scss'

export type PostEntryProps = {
  postId: Post['id']
  postMeta: Post['meta']
}

function PostEntry({ postId, postMeta }: PostEntryProps) {
  const { date, subtitle, title } = postMeta

  return (
    <div className={styles.container}>
      <div className={styles.date}>{date}</div>
      <h2 className={styles.title}>
        <Link href={`/posts/${postId}`}>
          <a>{title}</a>
        </Link>
      </h2>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  )
}

export default PostEntry
