export type PostMeta = {
  title: string
  subtitle: string
  date: string
}

export type Post = {
  id: string
  meta: PostMeta
  content: string
}
