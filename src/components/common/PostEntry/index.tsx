import type { PostMeta } from 'modules/post/types'

export type PostEntryProps = {
  postMeta: PostMeta
}

function PostEntry({ postMeta }: PostEntryProps) {
  const { title, subtitle, date, tags } = postMeta

  return (
    <div>
      <div>Title: {title}</div>
      <div>Subtitle: {subtitle}</div>
      <div>Date: {date}</div>
      <div>Tags: {tags.join(', ')}</div>
    </div>
  )
}

export default PostEntry
