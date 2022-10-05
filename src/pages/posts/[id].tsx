import PostsIdPage from 'components/pages/PostsIdPage'
import { POSTS_DIRECTORY } from 'modules/post/constants'
import type { Post } from 'modules/post/types'
import type { GetServerSideProps, GetStaticPaths, NextPage } from 'next'
import { getAllPostIds, getPostById } from 'server/ssg'

export type PagesPostsIdProps = {
  post: Post | null
}

const PagesPostsId: NextPage<PagesPostsIdProps> = ({ post }) => {
  return <PostsIdPage post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPostIds(POSTS_DIRECTORY),
    fallback: false,
  }
}

export const getStaticProps: GetServerSideProps<PagesPostsIdProps> = async ({
  params,
}) => {
  const post = getPostById(POSTS_DIRECTORY, params?.id)

  return {
    props: {
      post,
    },
  }
}

export default PagesPostsId
