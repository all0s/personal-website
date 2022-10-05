import IndexPage from 'components/pages/IndexPage'
import { POSTS_DIRECTORY } from 'modules/post/constants'
import type { Post } from 'modules/post/types'
import type { GetStaticProps, NextPage } from 'next'
import { getAllPosts } from 'server/ssg'

export type PagesIndexProps = {
  posts: Post[]
}

const PagesIndex: NextPage<PagesIndexProps> = ({ posts }) => {
  return <IndexPage posts={posts} />
}

export const getStaticProps: GetStaticProps<PagesIndexProps> = async () => {
  const posts = getAllPosts(POSTS_DIRECTORY, { sortByDate: 'desc' })

  return {
    props: {
      posts,
    },
  }
}

export default PagesIndex
