export type PostMeta = {
  title: string
  date: Date
  tags: string[]
}

export type Post = {
  id: string
  meta: PostMeta
  content: string
}
