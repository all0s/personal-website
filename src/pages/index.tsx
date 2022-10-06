import IndexPage from 'components/pages/IndexPage'
import { getAllPosts } from 'server/ssg'

import type { Post } from 'modules/post/types'
import type { GetStaticProps, NextPage } from 'next'

export type PagesIndexProps = {
  posts: Post[]
}

const PagesIndex: NextPage<PagesIndexProps> = ({ posts }) => {
  return <IndexPage posts={posts} />
}

export const getStaticProps: GetStaticProps<PagesIndexProps> = async () => {
  const posts = getAllPosts({ sortByDate: 'desc' })

  return {
    props: {
      posts,
    },
  }
}

export default PagesIndex
