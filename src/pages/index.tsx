import IndexPage from 'components/pages/IndexPage'
import { POSTS_DIRECTORY } from 'modules/post/constants'
import type { Post } from 'modules/post/types'
import { getAllPosts } from 'modules/server/api'
import type { NextPage } from 'next'

export type IndexProps = {
  posts: Post[]
}

const Index: NextPage<IndexProps> = ({ posts }) => {
  return <IndexPage posts={posts} />
}

export async function getStaticProps() {
  const posts = getAllPosts(POSTS_DIRECTORY, { sortByDate: 'desc' })

  return {
    props: {
      posts,
    },
  }
}

export default Index
