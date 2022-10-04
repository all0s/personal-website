import type { Post } from 'modules/post/types'

export type IndexPageProps = {
  posts: Post[]
}

function IndexPage({ posts }: IndexPageProps) {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <div>Title: {post.meta.title}</div>
          <div>Date: {post.meta.date}</div>
          <div>Tags: {post.meta.tags.join(', ')}</div>
        </div>
      ))}
    </div>
  )
}

export default IndexPage
