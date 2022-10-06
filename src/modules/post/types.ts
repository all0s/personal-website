export type PostMeta = {
  date: string
  subtitle: string
  title: string
}

export type Post = {
  contentHtml: string
  id: string
  meta: PostMeta
}
