import PostsIdPage from 'components/pages/PostsIdPage'
import { getAllPostIds, getPostById } from 'server/ssg'

import type { Post } from 'modules/post/types'
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'

export type PagesPostsIdProps = {
  post: Post | null
}

const PagesPostsId: NextPage<PagesPostsIdProps> = ({ post }) => {
  return <PostsIdPage post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPostIds(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PagesPostsIdProps> = async ({
  params,
}) => {
  const post = await getPostById(params?.id)

  return {
    props: {
      post,
    },
  }
}

export default PagesPostsId
