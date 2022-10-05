import type { PostMeta } from 'modules/post/types'
import styles from './PostEntry.module.scss'

export type PostEntryProps = {
  postMeta: PostMeta
}

function PostEntry({ postMeta }: PostEntryProps) {
  const { title, subtitle, date, tags } = postMeta

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.date}>{date}</div>
      <div>{tags.join(', ')}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  )
}

export default PostEntry
