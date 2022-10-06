import PostEntry from './PostEntry'
import styles from './Posts.module.scss'

import type { Post } from 'modules/post/types'

export type PostsProps = {
  posts: Post[]
}

function Posts({ posts }: PostsProps) {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostEntry key={post.id} postId={post.id} postMeta={post.meta} />
      ))}
    </div>
  )
}

export default Posts
