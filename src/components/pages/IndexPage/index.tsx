import PostEntry from 'components/common/PostEntry'
import type { Post } from 'modules/post/types'

export type IndexPageProps = {
  posts: Post[]
}

function IndexPage({ posts }: IndexPageProps) {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostEntry key={post.id} postMeta={post.meta} />
      ))}
    </div>
  )
}

export default IndexPage
