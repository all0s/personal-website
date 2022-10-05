import type { PostMeta } from 'modules/post/types'
import styles from './PostEntry.module.scss'

export type PostEntryProps = {
  postMeta: PostMeta
}

function PostEntry({ postMeta }: PostEntryProps) {
  const { title, subtitle, date } = postMeta

  return (
    <div className={styles.container}>
      <div className={styles.date}>{date}</div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  )
}

export default PostEntry
