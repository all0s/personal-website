export type PostMeta = {
  title: string
  date: string
  tags: string[]
}

export type Post = {
  id: string
  meta: PostMeta
  content: string
}
