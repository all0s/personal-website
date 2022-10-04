import IndexPage from 'components/pages/IndexPage'
import { POSTS_DIRECTORY } from 'modules/post/constants'
import { getAllPosts } from 'modules/server/api'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return <IndexPage />
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
