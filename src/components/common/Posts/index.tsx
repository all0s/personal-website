import type { Post } from 'modules/post/types'
import PostEntry from './PostEntry'
import styles from './Posts.module.scss'

export type PostsProps = {
  posts: Post[]
}

function Posts({ posts }: PostsProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostEntry key={post.id} postMeta={post.meta} />
      ))}
    </div>
  )
}

export default Posts
