export type PostMeta = {
  date: string
  subtitle: string
  title: string
}

export type Post = {
  content: string
  id: string
  meta: PostMeta
}
