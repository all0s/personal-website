import type { Post } from 'modules/post/types'
import PostEntry from './PostEntry'
import styles from './Posts.module.scss'

export type PostsProps = {
  posts: Post[]
}

function Posts({ posts }: PostsProps) {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostEntry
          key={post.id}
          postId={post.id}
          postMeta={post.meta}
        />
      ))}
    </div>
  )
}

export default Posts
